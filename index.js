module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
  },
}
