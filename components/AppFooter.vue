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
  <footer class="py-4 w-full flex justify-between items-center">
    <div class="text-gray-500">
      2024–2024 © Glory Wong
    </div>
    <div>
      <UButton
        v-for="({ to, icon }, index) in links" :key="index" :to="to" :icon="icon" target="_blank" color="gray"
        variant="ghost" size="xl" :ui="{ rounded: 'rounded-full' }"
      />
    </div>
    <div>
      <ButtonColorMode />
    </div>
  </footer>
</template>

<style scoped></style>
