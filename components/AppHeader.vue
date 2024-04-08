<script setup lang="ts">

</script>

<template>
  <header class="flex justify-between gap-4 py-8">
    <ULink to="/" class="flex gap-1 items-center text-xl sm:text-2xl">
      <BaseImage src="/logo.svg" title="logo" class="w-10 h-10" />
      <h1>Glory Wong</h1>
    </ULink>
    <AppNav class="hidden sm:block" />
    <div class="block sm:hidden">
      <UPopover>
        <UButton variant="ghost" color="white" icon="i-heroicons-bars-3" />
        <template #panel>
          <div>
            <AppNav vertical />
          </div>
        </template>
      </UPopover>
    </div>
  </header>
</template>

<style scoped></style>
