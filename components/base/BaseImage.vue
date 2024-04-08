<script setup lang="ts">
import { withBase } from 'ufo'

export interface BaseImageProps {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
}

const props = withDefaults(defineProps<BaseImageProps>(), {
  alt: 'image',
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//'))
    return withBase(props.src, useRuntimeConfig().app.baseURL)

  return props.src
})
</script>

<template>
  <img
    :alt="alt"
    :title="alt"
    :src="refinedSrc" :width="width" :height="height" loading="lazy" class="object-cover" role="img"
  />
</template>

<style scoped></style>
