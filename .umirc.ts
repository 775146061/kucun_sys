import { defineConfig } from 'umi';
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';

export default defineConfig({
  history: {
    type: 'hash',
  },
  publicPath: './',
  outputPath: './build',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.plugin('windicss').use(WindiCSSWebpackPlugin);
  },
});
