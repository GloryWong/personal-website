<script setup lang="ts">
import type { BaseMaskProps } from './BaseMask.vue'

export interface BaseMaskSpinnerProps extends BaseMaskProps {
  /**
   * Tailwind [font-size](https://tailwindcss.com/docs/font-size)
   * @default text-3xl
   */
  spinnerSize?: string
  text?: string
  /**
   * text position
   * @default bottom
   */
  textPos?: 'bottom' | 'right'
}

const props = withDefaults(defineProps<BaseMaskSpinnerProps>(), {
  spinnerSize: 'text-3xl',
  textPos: 'bottom',
})

const baseMaskProps = reactiveOmit(props, 'spinnerSize', 'text', 'textPos')
</script>

<template>
  <BaseMask v-bind="baseMaskProps">
    <div class="flex gap-4 justify-center items-center" :class="textPos === 'bottom' ? 'flex-col' : 'flex-row'">
      <!-- <i class="i-line-md-loading-twotone-loop text-surface-400 dark:text-surface-500" :class="[spinnerSize]"></i> -->
      <UIcon name="i-line-md-loading-twotone-loop" class="text-gray-400 dark:text-gray-600" :class="spinnerSize" />
      <span v-if="text" class="font-semibold text-surface-400 dark:text-surface-500">{{ text }}</span>
    </div>
  </BaseMask>
</template>

<style scoped></style>
