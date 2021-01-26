const path = require('path');

console.log('process.env.NODE_ENV', process.env.NODE_ENV, process.env.NODE_ENV === 'production');
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/style/var.scss";',
      },
    },
  },

  devServer: {
    hot: true,
    proxy: {
      '/api': {
        target: 'http://aaa.com/api',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
