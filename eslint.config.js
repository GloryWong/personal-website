import antfu from '@antfu/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'

// https://eslint.vuejs.org/rules/
export default await antfu({
  plugins: {
    perfectionist,
  },
  rules: {
    'node/prefer-global/process': 'off',
    'vue/html-self-closing': ['warn', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
    }],
  },
}, {
  // https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores
  ignores: ['assets/presets/**'],
})
