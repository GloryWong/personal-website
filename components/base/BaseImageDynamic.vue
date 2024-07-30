<script setup lang="ts">
import type { BaseImageProps } from './BaseImage.vue'

type BaseImageDynamicProps = BaseImageProps

const props = defineProps<BaseImageDynamicProps>()

const loaded = ref(false)
const onLoad = () => loaded.value = true
const failed = ref(false)
const onError = () => failed.value = true
</script>

<template>
  <div class="relative overflow-hidden">
    <ClientOnly>
      <BaseImage
        v-bind="props"
        @load="onLoad" @error="onError"
      />
    </ClientOnly>
    <BaseMaskMix
      :loading="!loaded" :force-error-mask="failed"
      :error-mask-props="{ iconName: 'i-uil-image-times' }" bg-mode="opaque"
    />
  </div>
</template>

<style scoped></style>
