<script setup lang="ts">
import type { BaseImageProps } from '../base/BaseImage.vue'

const props = defineProps<BaseImageProps>()
</script>

<template>
  <BaseImage v-bind="props" class="prose-img" />
</template>

<style lang="ts" scoped>

</style>
