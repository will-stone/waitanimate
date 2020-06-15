const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      fontFamily: {
        title: ['Bowlby One SC', 'sans-serif'],
      },
    },
  },
  variants: {
    gridTemplateColumns: ['responsive'],
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const spacerValues = Object.entries(theme('padding'))

      const addedUtils = {}

      for (const [k, v] of spacerValues) {
        addedUtils[`.emulated-flex-gap-${k} > *`] = {
          marginTop: v,
          marginLeft: v,
        }
        addedUtils[`.emulated-flex-gap-${k}`] = {
          display: 'inline-flex',
          flexWrap: 'wrap',
          marginTop: `-${v}`,
          marginLeft: `-${v}`,
          width: `calc(100% + ${v})`,
        }
      }

      addUtilities(addedUtils)
    }),
  ],
}
