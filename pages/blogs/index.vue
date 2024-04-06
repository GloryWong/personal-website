<script setup lang="ts">
useHead({
  meta: [
    { name: 'description', content: 'Glory Wong blogs' },
  ],
  title: 'Blogs',
})
</script>

<template>
  <div>
    <ContentList v-slot="{ list }">
      <div class="flex flex-col gap-4">
        <div>
          <p class="flex gap-2 items-center text-gray-800 dark:text-gray-300">
            Total blogs:<span>{{ list.length }}</span>
          </p>
        </div>
        <ul class="flex flex-col">
          <li v-for="{ title, description, _path } in list" :key="_path">
            <ULink :to="`${$route.path}${_path}`">
              <div class="px-4 py-4 hover:bg-gray-300/30 dark:hover:bg-gray-800/30">
                <h2>{{ title }}</h2>
                <p class="text-gray-500">
                  {{ description }}
                </p>
              </div>
            </ULink>
          </li>
        </ul>
      </div>
    </ContentList>
  </div>
</template>

<style scoped>

</style>
