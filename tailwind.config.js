/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {},
    colors: {
      'nevOne': '#606981',
      'btnVtb': '#0084ff',
      'lineVtb': '#d4d7df',
      'white': '#ffffff',
      'border_blue': '#30498f',
    }
  },
  plugins: [],
  darkMode: 'class'
}