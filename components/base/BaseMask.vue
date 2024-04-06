<script setup lang="ts">
import type { BaseMaskCoreProps } from './BaseMaskCore.vue'

export interface BaseMaskProps extends BaseMaskCoreProps {
  /**
   * Disable transition
   * @default false
   */
  transitionDisabled?: boolean
}

const props = defineProps<BaseMaskProps>()

const coreProps = reactiveOmit(props, 'transitionDisabled')
</script>

<template>
  <BaseMaskCore v-if="transitionDisabled" v-bind="coreProps">
    <slot></slot>
  </BaseMaskCore>
  <TransitionFade v-else>
    <BaseMaskCore v-bind="coreProps">
      <slot></slot>
    </BaseMaskCore>
  </TransitionFade>
</template>

<style scoped></style>
