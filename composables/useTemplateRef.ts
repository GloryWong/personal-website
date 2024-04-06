export type TemplateRef<T = HTMLElement> = Ref<T | null>
export type MaybeTemplateRef<T = HTMLElement> = T | TemplateRef<T | null>

export function useTemplateRef<T = HTMLElement>() {
  const templateRef: TemplateRef<T> = ref(null)
  return templateRef
}
