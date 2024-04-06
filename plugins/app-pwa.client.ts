export default defineNuxtPlugin(() => {
  const toast = useToast()
  const { $pwa } = useNuxtApp()
  const appConfig = useAppConfig()
  const HIDE_INSTALL_TOAST_KEY = `${appConfig.appId}:hide-install-toast`

  const hideInstallToast = ref(false)
  const hide = localStorage.getItem(HIDE_INSTALL_TOAST_KEY)
  if (hide === 'true')
    hideInstallToast.value = true

  whenever(
    () => $pwa?.isPWAInstalled && $pwa?.needRefresh,
    () => {
      toast.add({
        id: 'updateApp',
        title: 'Update',
        description: 'A new version is available. Please click the refresh button to update.',
        icon: 'i-heroicons-sparkles',
        color: 'primary',
        timeout: 0,
        actions: [
          {
            label: 'Refresh',
            color: 'primary',
            variant: 'soft',
            click: () => {
              $pwa?.updateServiceWorker()
            },
          },
          {
            label: 'Dismiss',
            variant: 'ghost',
            click: () => {
              $pwa?.cancelPrompt()
            },
          },
        ],
      })
    },
    { immediate: true },
  )

  whenever(
    () =>
      !$pwa?.isPWAInstalled && !hideInstallToast.value && $pwa?.showInstallPrompt,
    () => {
      toast.add({
        id: 'installApp',
        title: `Install ${appConfig.appName}`,
        description:
          `${appConfig.appName} can also be utilized as a Progressive Web Application (PWA), allowing you to install it on your device for more convenient access, and it's even available for use offline.`,
        icon: 'i-heroicons-arrow-down-tray-20-solid',
        color: 'primary',
        timeout: 0,
        actions: [
          {
            label: 'Install',
            color: 'primary',
            variant: 'soft',
            click: () => {
              $pwa?.install()
            },
          },
          {
            label: 'Dismiss',
            variant: 'ghost',
            click: () => {
              localStorage.setItem(HIDE_INSTALL_TOAST_KEY, 'true')
            },
          },
        ],
      })
    },
    { immediate: true },
  )
})
