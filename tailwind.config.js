/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat'],
      },
      colors: {
        primaryColor: '#23A6F0',
        secondaryColor: '#23856D',
        secondTextColor: '#737373',
        flashDealBgColor: '#FAFAFA',
        textColor: '#252B42',
        mutedColor: '#BDBDBD',
      },
      backgroundImage: {
        bannerBackground: "url('/src/assets/images/banner-background.png')",
      },
    },
  },
  plugins: [],
}