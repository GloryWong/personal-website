<script setup lang="ts">
defineProps<{
  vertical?: boolean
}>()

const { navigation } = useContent()
</script>

<template>
  <nav>
    <ul class="flex gap-2" :class="{ 'flex-col': vertical }">
      <li v-for="link in navigation" :key="link._path" class="hover:underline">
        <UButton :to="link._path" variant="link" color="white" class="text-lg sm:text-2xl">
          {{ link.title }}
        </UButton>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
