import antfu from '@antfu/eslint-config'

// https://eslint.vuejs.org/rules/
export default await antfu({
  astro: true,
  rules: {
    'antfu/no-top-level-await': 'off',
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
})
