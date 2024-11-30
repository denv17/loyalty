/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      black: '#000',
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fff',
      error: '#ff0000',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Reckless', 'serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
