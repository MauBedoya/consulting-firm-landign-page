/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url(https://res.cloudinary.com/dmpiwivwa/image/upload/v1684018359/consulting-lp/images/heroBg_j8sugl.webp)",
        'hero-triangle': "url(https://res.cloudinary.com/dmpiwivwa/image/upload/v1684269835/consulting-lp/images/heroTriangle_ttp5y8.svg)",
        'img-section': "url(https://res.cloudinary.com/dmpiwivwa/image/upload/v1684270042/consulting-lp/images/sectionBg_xogyxi.webp)"
      },
      backdropBlur: {
        xs: '1px'
      },
      fontFamily: {
        'Poppins': 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}