<script lang="ts" setup>

</script>

<template>
  <UContainer>
    <div class="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center py-4 sm:py-6 lg:py-8">
      <TheHeader class="w-full" />
      <div class="w-full">
        <slot></slot>
      </div>
      <TheFooter />
    </div>
  </UContainer>
</template>

<style lang="scss" scoped></style>
