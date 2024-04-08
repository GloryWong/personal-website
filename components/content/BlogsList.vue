<script setup lang="ts">
const { data } = await useAsyncData('content-list-blogs', () => queryContent('blogs/').find())
</script>

<template>
  <div class="not-prose">
    <div v-if="data" class="flex flex-col gap-4">
      <div>
      </div>
      <ul class="flex flex-col">
        <li v-for="{ title, description, date, _path } in data" :key="_path">
          <ULink :to="_path">
            <div class="pr-4 py-4 hover:bg-gray-200/30 dark:hover:bg-gray-800/30">
              <h2 class="text-xl text-primary">
                {{ title }}
              </h2>
              <p class="text-gray-500 text-sm">
                {{ formatDate(date) }}
              </p>
              <p class="mt-1 line-clamp-2">
                {{ description }}
              </p>
            </div>
          </ULink>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No blogs found</p>
    </div>
  </div>
</template>

<style scoped></style>
