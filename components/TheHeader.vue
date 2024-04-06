<script setup lang="ts">
interface NavItem {
  label: string
  to: string
}

const navItems: NavItem[] = [{
  label: 'Blogs',
  to: '/blogs',
}]
</script>

<template>
  <div class="flex justify-between gap-4 text-base sm:text-lg">
    <ULink to="/" class="flex items-center">
      <BaseImage src="/logo.svg" title="logo" class="w-10 h-10" />
      Glory Wong
    </ULink>
    <div class="flex items-center gap-2">
      <ul class="flex gap-2">
        <li v-for="({ label, to }, index) in navItems" :key="index" class="hover:underline">
          <ULink :to="to">
            {{ label }}
          </ULink>
        </li>
      </ul>
      <div>
        <ButtonColorMode />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
