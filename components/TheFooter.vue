<script setup lang="ts">
const links: {
  to: string
  icon: string
}[] = [{
  to: 'https://github.com/GloryWong',
  icon: 'i-mdi-github',
}, {
  to: 'https://codepen.io/glorywong',
  icon: 'i-mdi-codepen',
}]
</script>

<template>
  <div class="py-4 w-full flex justify-center items-center">
    <UButton
      v-for="({ to, icon }, index) in links" :key="index" :to="to" :icon="icon" target="_blank" color="gray"
      variant="ghost" size="xl" :ui="{ rounded: 'rounded-full' }"
    />
  </div>
</template>

<style scoped></style>
