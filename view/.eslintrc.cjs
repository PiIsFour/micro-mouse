/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // '@typescript-eslint/no-non-null-assertion': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 'tab'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
  },
}
