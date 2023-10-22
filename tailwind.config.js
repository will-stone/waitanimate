/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      fontFamily: {
        title: ['Bowlby One SC', 'sans-serif'],
      },
    },
    screens: {
      lg: '1024px',
      md: '768px',
      sm: '640px',
    },
  },
}
