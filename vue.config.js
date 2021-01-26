const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const productionGzipExtensions = ['js', 'css'];

module.exports = {
  // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: false,
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/style/var.scss";',
      },
    },
  },
  configureWebpack: () => {
    const plugins = [];
    plugins.push(new SpeedMeasurePlugin());
    if (process.env.NODE_ENV === "'production'"){
      plugins.push(new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false, // 是否删除源文件
      }));
    } else {
      plugins.push(new HardSourceWebpackPlugin());
    }

    return {
      output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
      },

      plugins,
    };
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
