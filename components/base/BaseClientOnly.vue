<script setup lang="ts">

</script>

<template>
  <ClientOnly>
    <slot></slot>
    <template #fallback>
      <slot name="fallback">
        <div class="relative w-full h-full">
          <BaseMaskSpinner show bg-mode="opaque" />
        </div>
      </slot>
    </template>
  </ClientOnly>
</template>

<style scoped>

</style>
