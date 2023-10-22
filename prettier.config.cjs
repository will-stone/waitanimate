const myConfig = require('@will-stone/prettier-config')

module.exports = {
  ...myConfig,
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  plugins: [...myConfig.plugins, 'prettier-plugin-svelte'],
}
