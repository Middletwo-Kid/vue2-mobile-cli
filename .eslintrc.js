module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-blocks': 'off', // 括号前需要空格
    'trailing comma': 'off', // 强制加上逗号
    'class-methods-use-this': 'off', // 在示例方法中没有使用this，那么ESLint推荐你写成static方法
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
