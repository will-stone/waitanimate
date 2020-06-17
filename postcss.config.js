const tailwind = require('tailwindcss')

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/index.html', './src/**/*.html', './src/**/*.svelte'],

  whitelistPatterns: [/svelte-/u],

  defaultExtractor: (content) => {
    const matches = content.match(/[A-Za-z0-9-_:/]+/gu) || []
    return matches.map((match) => {
      if (match.startsWith('class:')) {
        return match.split(':')[1]
      }

      return match
    })
  },
})

const production = !process.env.ROLLUP_WATCH

module.exports = {
  plugins: [tailwind, ...(production ? [purgecss] : [])],
}
