import config from '@will-stone/eslint-config'
import pluginSvelte from 'eslint-plugin-svelte'
import parserSvelte from 'svelte-eslint-parser'

export default [
  ...config(),
  {
    ignores: ['.svelte-kit/**/*'],
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: parserSvelte,
    },
    plugins: {
      svelte: pluginSvelte,
    },
    rules: {
      ...pluginSvelte.configs.base.overrides[0].rules,
      ...pluginSvelte.configs.recommended.rules,
      'svelte/no-at-html-tags': 'off',
    },
  },
]
