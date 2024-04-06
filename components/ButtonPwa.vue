<script setup lang="ts">
const toast = useToast()
const { $pwa } = useNuxtApp()
const appConfig = useAppConfig()

function onUpdate() {
  const { id } = toast.add({
    id: 'updateAppWarn',
    title: 'Confirm',
    description: 'The page will be refreshed. Would you like to confirm the update?',
    icon: 'i-heroicons-exclamation-circle',
    color: 'orange',
    timeout: 0,
    actions: [{
      label: 'OK',
      color: 'primary',
      variant: 'soft',
      click: () => {
        $pwa?.updateServiceWorker()
      },
    }, {
      label: 'Cancel',
      variant: 'ghost',
      click: () => {
        toast.remove(id)
      },
    }],
  })
}

function onInstall() {
  $pwa?.install()
}
</script>

<template>
  <UTooltip v-if="$pwa?.showInstallPrompt" :text="`Install ${appConfig.appName} on your device`" :open-delay="500">
    <UButton
      :label="`Install ${appConfig.appName}`" color="primary" variant="outline"
      icon="i-heroicons-arrow-down-tray-20-solid" @click="onInstall"
    />
  </UTooltip>
  <UTooltip v-if="$pwa?.isPWAInstalled && $pwa?.needRefresh" text="A new version is available. Click to update." :open-delay="500">
    <UButton
      :label="`Update ${appConfig.appName}`" color="primary" variant="outline" icon="i-heroicons-sparkles"
      @click="onUpdate"
    />
  </UTooltip>
</template>

<style scoped></style>
