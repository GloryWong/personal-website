<script setup lang="ts">
defineProps<{
  title?: string
  src: string
}>()
</script>

<template>
  <img
    :alt="title ?? 'image'" :title="title ?? 'image'" :src="src" loading="lazy" class="object-cover" role="img"
  />
</template>

<style scoped></style>
