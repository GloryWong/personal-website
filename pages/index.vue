<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: appConfig.appDescription },
  ],
})
</script>

<template>
  <div class="flex justify-center">
    <BaseImageLoad src="/og-image.png" />
  </div>
</template>

<style scoped>

</style>
