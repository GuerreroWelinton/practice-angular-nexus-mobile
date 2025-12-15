module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#ec4899',
      },
      fontFamily: {
        poppins: ['Poppins-Regular'],
        'poppins-bold': ['Poppins-Bold'],
        roboto: ['Roboto-Regular'],
        'roboto-bold': ['Roboto-Bold'],
      },
    },
  },
  plugins: [],
};
