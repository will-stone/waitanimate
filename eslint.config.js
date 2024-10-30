import config from '@will-stone/eslint-config'
import pluginSvelte from 'eslint-plugin-svelte'

export default [
  ...config(),
  {
    ignores: ['.svelte-kit/**/*'],
  },
  ...pluginSvelte.configs['flat/recommended'],
  ...pluginSvelte.configs['flat/prettier'],
  {
    rules: {
      'prefer-const': 'off',
    },
  },
]
