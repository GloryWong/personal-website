<script setup lang="ts">
import type { Except } from 'type-fest'
import type { BaseMaskErrorProps } from './BaseMaskError.vue'
import type { BaseMaskSpinnerProps } from './BaseMaskSpinner.vue'
import type { BaseMaskProps } from './BaseMask.vue'

interface BaseMaskMixProps extends Omit<BaseMaskProps, 'show' | 'transitionEnabled'> {
  loading: boolean
  error?: any
  forceErrorMask?: boolean
  spinnerMaskProps?: Except<BaseMaskSpinnerProps, keyof BaseMaskProps>
  errorMaskProps?: Except<BaseMaskErrorProps, keyof BaseMaskProps | 'error'>
}

const props = defineProps<BaseMaskMixProps>()

const spinnerMaskProps = reactiveComputed(() => Object.assign(reactiveOmit(props, 'loading', 'error', 'forceErrorMask', 'spinnerMaskProps', 'errorMaskProps'), props.spinnerMaskProps))
const errorMaskProps = reactiveComputed(() => Object.assign(reactiveOmit(props, 'loading', 'error', 'forceErrorMask', 'spinnerMaskProps', 'errorMaskProps'), props.errorMaskProps))
</script>

<template>
  <TransitionFade mode="in-out">
    <BaseMaskError v-if="forceErrorMask || error" show :error="error" v-bind="errorMaskProps" transition-disabled />
    <BaseMaskSpinner v-else-if="loading" show v-bind="spinnerMaskProps" transition-disabled />
  </TransitionFade>
</template>

<style scoped></style>
