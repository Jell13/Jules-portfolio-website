/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home':'url("./assets/home.jpg")',
        'banner1': 'url("./assets/banner1.jpg")',
        'banner2' : 'url("./assets/banner2.jpg")',
        'hero': 'url("./assets/myhero.png")',
        'banner3' : 'url("./assets/banner3.jpg")'
      },
    },
    fontFamily: {
      signature: ["Great Vibes"]
    }
  },
  plugins: [],
}

