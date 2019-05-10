const path = require('path');
const cssNext = require('postcss-cssnext');
const moduleValues = require('postcss-modules-values');

const alias = require('./scripts/webpack/aliases');

const postcssLoader = [
  {
    loader: 'style-loader',
  },
  {
    loader: 'css-loader',
    options: {
      modules: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [cssNext, moduleValues],
    },
  },
];

module.exports = {
  entry: './app/origin.jsx',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  node: {
    fs: 'empty',
  },
  mode: process.env.NODE_ENV,
  resolve: {
    modules: [path.resolve('app'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
    alias,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
          },
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/,
        exclude: [path.join(__dirname, 'node_modules/react-toolbox')],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        include: [path.join(__dirname, 'node_modules/react-toolbox')],
        loader: postcssLoader,
      },
    ],
  },
};
