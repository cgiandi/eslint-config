module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'airbnb-base'],
  plugins: ['import', 'node', 'promise'],
  globals: {
    require: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      defaultParams: true,
      spread: true,
    },
  },
  rules: {
    strict: 'error',
  },
};
