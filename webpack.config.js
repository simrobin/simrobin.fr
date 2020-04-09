const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const srcPath = './src';

const ENV = process.env.npm_lifecycle_event;
const isBuild = ENV.includes('build');

const publicUrl = isBuild ? '' : 'http://localhost:8080';
const publicPath = isBuild ? '/' : 'http://localhost:8080/';

const config = {};

config.entry = [`${srcPath}/js/main.js`, `${srcPath}/css/style.scss`];

config.output = {
  path: path.resolve('dist'),
  filename: 'js/main.[hash].js',
  publicPath,
};

config.module = {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loader: [
        isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader?name=fonts/[name].[ext]',
      include: path.resolve(srcPath, 'fonts'),
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader?name=img/[name].[ext]',
      include: path.resolve(srcPath, 'img'),
    },
    {
      test: /\.(pdf)$/i,
      loader: 'file-loader?name=files/[name].[ext]',
      include: path.resolve(srcPath, 'files'),
    },
  ],
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify({
      PUBLIC_URL: publicUrl,
      NODE_ENV: process.env.NODE_ENV,
    }),
  }),
  new HtmlWebpackPlugin({
    template: `${srcPath}/index.html`,
  }),
  new SWPrecacheWebpackPlugin({
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    filename: 'service-worker.js',
    minify: false,
    navigateFallback: publicUrl + '/index.html',
    navigateFallbackWhitelist: [/^(?!\/__).*/],
    staticFileGlobsIgnorePatterns: [/\.map$/],
  }),
];

if (isBuild) {
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/style.[hash].css',
    }),
  );
}

config.mode = isBuild ? 'production' : 'development';

module.exports = config;
