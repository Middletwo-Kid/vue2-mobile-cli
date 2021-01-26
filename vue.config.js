const path = require('path');

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
        target: 'http://crmtest.8kqw.com/api',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
