export function toggleTheme(dark: boolean) {
  const css = document.createElement('style')

  css.appendChild(
    document.createTextNode(
      `* {
             -webkit-transition: none !important;
             -moz-transition: none !important;
             -o-transition: none !important;
             -ms-transition: none !important;
             transition: none !important;
          }
        `,
    ),
  )

  document.head.appendChild(css)

  if (dark) {
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.remove('dark')
  }

  // eslint-disable-next-line ts/no-unused-expressions
  window.getComputedStyle(css).opacity
  document.head.removeChild(css)
}

export function preloadTheme() {
  const userTheme = localStorage.theme

  if (userTheme === 'light' || userTheme === 'dark') {
    toggleTheme(userTheme === 'dark')
  }
  else {
    toggleTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }
}
