module.exports = {
  env: {
    browser: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    'prettier/prettier': ['error'],
    'prefer-const': 'warn',
  },
};
