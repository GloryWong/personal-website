<script setup lang="ts">
const props = defineProps<{
  title?: string
  persist?: boolean
  canOverflowScreen?: boolean
  buttonOk?: {
    label: string
    icon?: string
    action: () => boolean | void | Promise<boolean | void>
  }
  buttonClose?: boolean | string | {
    label: string
    icon?: string
  }
}>()

const isOpen = defineModel<boolean>({ required: true })

defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpen, () => !props.persist],
    handler: () => { isOpen.value = false },
  },
})
</script>

<template>
  <UModal
    v-model="isOpen" :ui="{
      container: canOverflowScreen ? '' : 'h-full',
      base: canOverflowScreen ? '' : 'max-h-full',
    }" :prevent-close="persist"
  >
    <UCard
      :ui="{
        base: canOverflowScreen ? '' : 'flex flex-col',
        body: {
          base: canOverflowScreen ? '' : 'flex-grow min-h-0 overflow-auto',
        },
      }"
    >
      <template #header>
        <div class="flex items-center justify-between gap-4 flex-nowrap">
          <h3 class="text-base font-semibold leading-6 truncate">
            <slot name="title">
              {{ title }}
            </slot>
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
        </div>
      </template>
      <slot></slot>
      <template #footer>
        <div class="flex gap-2 justify-end items-center">
          <slot name="customized-footer-buttons"></slot>
          <template v-if="buttonOk || buttonClose">
            <UButton
              v-if="buttonOk" :label="buttonOk.label"
              :icon="buttonOk.icon ? buttonOk.icon : 'i-heroicons-check-20-solid'" color="primary" @click="async () => {
                const result = await buttonOk?.action();
                if (typeof result === 'boolean') {
                  isOpen = !result;
                  return;
                }
                isOpen = false;
              }"
            />
            <UButton
              v-if="buttonClose"
              :label="buttonClose === true ? 'Close' : typeof buttonClose === 'string' ? buttonClose : buttonClose.label"
              :icon="(typeof buttonClose === 'boolean' || typeof buttonClose === 'string' || !buttonClose.icon) ? 'i-heroicons-x-mark-20-solid' : buttonClose.icon"
              color="gray" variant="ghost" @click="isOpen = false"
            />
          </template>
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<style scoped></style>
