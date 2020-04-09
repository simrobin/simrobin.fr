module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  globals: {
    ga: true,
  },
  plugins: ['babel', 'prettier', ],
  rules: {
    'prettier/prettier': 'error',
  },
};
