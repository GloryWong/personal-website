<script setup lang="ts">
</script>

<template>
  <div class="w-full flex justify-center">
    <article
      class="
          prose dark:prose-invert

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
