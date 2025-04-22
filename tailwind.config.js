/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        primary: '#16a34a', // verde neon suave
        dark: '#0f0f0f',
        light: '#f5f5f5',
      },
      extend: {
        animation: {
          'bounce-slow': 'bounce 2s infinite',
        },
      }
      
    },
  },
  plugins: [],
}
