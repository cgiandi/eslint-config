module.exports = {
  extends: ['eslint:recommended', 'eslint-config-airbnb-base'].map(
    require.resolve,
  ),
  plugins: ['import', 'node', 'promise'],
  globals: {
    require: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
};
