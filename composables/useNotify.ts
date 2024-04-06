type ToastOptions = Parameters<ReturnType<typeof useToast>['add']>[0]
const toastOptions: ToastOptions = {
  timeout: 2000,
}

const toastErrorOptions: ToastOptions = {
  ...toastOptions,
  color: 'red',
  icon: 'i-heroicons-exclamation-circle',
}

const toastSuccessOptions: ToastOptions = {
  ...toastOptions,
  color: 'green',
  icon: 'i-heroicons-check-circle',
}

export function useNotify() {
  const toast = useToast()

  const notifySuccess = (options: ToastOptions) =>
    toast.add({
      ...toastSuccessOptions,
      ...options,
    })

  const notifyError = (options: ToastOptions) =>
    toast.add({
      ...toastErrorOptions,
      ...options,
    })

  return {
    notifySuccess,
    notifyError,
  }
}
