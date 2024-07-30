import antfu from '@antfu/eslint-config'

// https://eslint.vuejs.org/rules/
export default await antfu({
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'node/prefer-global/process': 'off',
    'vue/html-self-closing': ['warn', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
    }],
  },
  typescript: {
    overrides: {
      'ts/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      }],
    },
  },
}, {
  // https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores
  ignores: ['assets/presets/**'],
})
