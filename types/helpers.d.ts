declare global {
  type ExceptFirstArrayElement<T extends readonly any[]> = T extends [
    any,
    ...infer rest,
  ]
    ? rest
    : never
}

export {}
