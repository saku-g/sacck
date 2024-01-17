module.exports = {
  extends: ['markuplint:recommended'],
  parser: {
    '\\.astro$': '@markuplint/astro-parser',
  },
  excludeFiles: ['./src/components/Svg.astro'],
  overrides: {
    './src/layouts/Layout.astro': {
      rules: {
        'character-reference': false,
      },
    },
  },
};
