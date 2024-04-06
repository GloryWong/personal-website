export default defineNuxtPlugin((nuxtApp) => {
  const { notifyError } = useNotify()

  nuxtApp.vueApp.config.errorHandler = (error, _, info) => {
    logger.error('Vue app', info || error)
  }

  nuxtApp.hook('vue:error', (error, _, info) => {
    notifyError({
      title: 'Error',
      description: info || String(error),
      icon: 'i-heroicons-x-circle',
      timeout: 0,
    })
  })
})
