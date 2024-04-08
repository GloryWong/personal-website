<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.appName}` : appConfig.appName
  },
})

const HOST = appConfig.appHost
const ogImage = `${import.meta.dev ? '' : HOST}/og-image.png`
useSeoMeta({
  description: appConfig.appDescription,
  ogTitle: appConfig.appName,
  ogSiteName: appConfig.appName,
  ogDescription: appConfig.appDescription,
  ogImage,
  ogImageAlt: 'Glory Wong',
  ogType: 'website',
  ogUrl: HOST,
  ogLocale: 'en-US',
  ogLocaleAlternate: ['en-US'],
  twitterTitle: appConfig.appName,
  twitterDescription: appConfig.appDescription,
  twitterImage: ogImage,
  twitterImageAlt: 'Glory Wong',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />

    <UContainer>
      <div class="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center min-h-screen">
        <AppHeader class="w-full" />
        <div class="w-full flex-grow">
          <NuxtPage />
        </div>
        <AppFooter />
      </div>
    </UContainer>

    <UNotifications />
  </div>
</template>
