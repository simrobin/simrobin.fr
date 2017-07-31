const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

const srcPath = `${__dirname}/src`;
const distPath = `${__dirname}/dist`;

const ENV = process.env.npm_lifecycle_event;
const isBuild = ENV.includes('build');

const config = {};

config.entry = [`${srcPath}/css/style.scss`];

config.output = {
  path: distPath,
  filename: 'js/main.[hash].js',
  publicPath: isBuild ? '/' : 'http://localhost:8080/',
};

config.module = {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel',
      include: srcPath,
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      }),
      include: srcPath,
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
  ],
};

config.plugins = [
  new HtmlWebpackPlugin({
    template: `${srcPath}/index.html`
  }),
  new ExtractTextPlugin('css/style.[hash].css'),
];

module.exports = config;
