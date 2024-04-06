<script setup lang="ts">
type BgMode = 'blur' | 'transparent' | 'translucent' | 'opaque'

export interface BaseMaskCoreProps {
  show: boolean
  /**
   * @default translucent
   */
  bgMode?: BgMode
  /**
   * @todo
   * Custom backgrond, **only available** for `opaque` bgMode.
   *
   * String of Tailwind classes.
   * @example
   * bg-surface-50 dark:bg-surface-900
   */
  customBgColor?: string
}

const props = withDefaults(defineProps<BaseMaskCoreProps>(), {
  bgMode: 'translucent',
})

const bgClassMap: Record<BgMode, string> = {
  blur: 'backdrop-blur',
  transparent: 'transparent',
  translucent: 'bg-gray-100/50 dark:bg-gray-800/50',
  opaque: 'bg-gray-100 dark:bg-gray-800',
}

const bgClass = computed(() => bgClassMap[props.bgMode])
</script>

<template>
  <div v-if="show" class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center" :class="bgClass">
    <slot></slot>
  </div>
</template>

<style scoped></style>
