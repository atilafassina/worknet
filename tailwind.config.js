module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,tsx,ts}', './components/**/*.{js,jsx,tsx, ts}'],
  theme: {
    extend: {
      animation: {
        'slow-spin': 'spin 5s linear infinite',
      },
    },
  },
}
