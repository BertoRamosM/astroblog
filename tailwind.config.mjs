/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        dragon: "url('/images/dragon.webp')",
      },
    },
  },
  plugins: [
  [require("tailwind-gradient-mask-image")]
  ],
};
