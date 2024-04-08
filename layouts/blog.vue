<script setup lang="ts">
const { next, prev } = useContent()
</script>

<template>
  <article class="mx-auto max-w-prose">
    <div>
      <UButton to="/blogs" size="xl" icon="i-heroicons-arrow-left-16-solid" variant="ghost" label="Back" />
      <!-- <header>
        <h1 v-if="page?.title">
          {{ page.title }}
        </h1>
        <time v-if="page?.date" :datetime="page.date">
          {{ formatDate(page.date) }}
        </time>
      </header> -->
    </div>

    <div class="my-5 sm:my-10">
      <slot></slot>
    </div>
    <div class="flex">
      <UButton
        v-if="prev && prev._dir === 'blogs'" icon="i-heroicons-arrow-left-16-solid" variant="ghost"
        :to="prev._path" :label="prev.title"
      />
      <div class="flex-grow"></div>
      <UButton
        v-if="next && next._dir === 'blogs'" icon="i-heroicons-arrow-right-16-solid" variant="ghost"
        :to="next._path" :label="next.title"
      />
    </div>
  </article>
</template>

<style scoped>

</style>
