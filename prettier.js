module.exports = {
  extends: ['prettier', 'plugin:prettier/recommended'].map(require.resolve),
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
