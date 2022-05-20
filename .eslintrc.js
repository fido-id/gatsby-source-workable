module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "object-curly-newline": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "comma-dangle": "off"
  },
};
