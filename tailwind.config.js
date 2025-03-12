/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anuphan: ['Anuphan', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

