const myConfig = require('@will-stone/prettier-config')

module.exports = {
  ...myConfig,
  plugins: [...myConfig.plugins, 'prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
