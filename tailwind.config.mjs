/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        dragon: "url('/images/dragon.webp')",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [[require("tailwind-gradient-mask-image")]],
};
