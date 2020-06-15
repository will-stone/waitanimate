const tailwind = require('tailwindcss')

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/index.html', './src/**/*.html', './src/**/*.svelte'],

  whitelistPatterns: [/svelte-/u],

  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/gu) || [],
})

const production = !process.env.ROLLUP_WATCH

module.exports = {
  plugins: [tailwind, ...(production ? [purgecss] : [])],
}
