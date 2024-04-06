<script setup lang="ts">
defineProps<{
  title?: string
  src: string
}>()

const loaded = ref(false)
const onLoad = () => loaded.value = true
const failed = ref(false)
const onError = () => failed.value = true
</script>

<template>
  <div class="relative">
    <ClientOnly>
      <BaseImage class="w-full h-full" :title="title" :src="src" @load="onLoad" @error="onError" />
    </ClientOnly>
    <BaseMaskMix
      :loading="!loaded" :force-error-mask="failed"
      :error-mask-props="{ iconName: 'i-uil-image-times', iconDynamic: true }" bg-mode="opaque"
    />
  </div>
</template>

<style scoped></style>
