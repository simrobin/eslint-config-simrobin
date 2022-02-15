module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', './.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
