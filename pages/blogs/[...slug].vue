<script setup lang="ts">
</script>

<template>
  <div class="w-full">
    <article
      class="
          prose dark:prose-invert

          prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl

          mx-auto

          prose-pre:bg-gray-100
          dark:prose-pre:bg-gray-800
          "
    >
      <ContentDoc :path="$route.params.slug[0]">
        <template #not-found>
          <h1>Blog not found</h1>
        </template>
        <template #empty>
          <h1>Blog is empty</h1>
        </template>
      </ContentDoc>
    </article>
  </div>
</template>

<style scoped lang="scss">
</style>
