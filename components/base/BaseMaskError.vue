<script setup lang="ts">
import type { BaseMaskProps } from './BaseMask.vue'

export interface BaseMaskErrorProps extends /* @vue-ignore */ BaseMaskProps {
  error?: any
  iconName?: string
  /**
   * Tailwind [font-size](https://tailwindcss.com/docs/font-size)
   * @default text-3xl
   */
  iconSize?: string
  iconDynamic?: boolean
  button?: {
    label?: string
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    onClick: () => void
  }
}

const props = withDefaults(defineProps<BaseMaskErrorProps>(), {
  iconName: 'i-heroicons-x-circle',
  iconSize: 'text-3xl',
})

const baseMaskProps = reactiveOmit(props, 'error', 'iconName', 'iconSize', 'iconDynamic', 'button')
</script>

<template>
  <BaseMask v-bind="baseMaskProps">
    <div class="flex justify-center items-center gap-2 flex-wrap">
      <UIcon :name="iconName" class="text-gray-400 dark:text-gray-600" :class="iconSize" :dynamic="iconDynamic" />
      <span class="text-center empty:hidden">
        <slot>{{ error }}</slot>
      </span>
      <UButton
        v-if="button" variant="outline" :label="button.label ?? 'Retry'" :size="button.size ?? 'small'"
        @click="button.onClick"
      />
    </div>
  </BaseMask>
</template>

<style scoped></style>
