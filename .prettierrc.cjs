module.exports = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
