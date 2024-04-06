<script setup lang="ts">
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <BaseClientOnly>
    <UButton
      :icon="colorMode.value === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'" variant="ghost"
      @click="toggleMode"
    />
    <template #fallback>
      <UButton icon="i-line-md-loading-twotone-loop" variant="ghost" />
    </template>
  </BaseClientOnly>
</template>

<style scoped></style>
