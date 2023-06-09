/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        "128": "32rem",
        "132": "34rem",
        "136": "36rem",
        "138": "38rem",
        "142": "42rem",
        "144": "44rem",
        "146": "46rem",
        "148": "48rem",
        "152": "52rem",
        "158": "58rem",
        "164": "64rem",
      },
    },
  },
  plugins: [],
}
