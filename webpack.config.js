'use strict';

const path = require('path');

const postcssPlugins = [
  require('postcss-cssnext')(),
  require('postcss-modules-values')
];

const postcssLoader = [
  {
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
    options: {
      modules: true
    }
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [...postcssPlugins]
    }
  }
];

module.exports = {
  entry: './app/origin.jsx',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.(scss|sass)$/,
        loader: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ]
      }, {
        test: /\.css$/,
        exclude: [
          path.join(__dirname, 'node_modules/react-toolbox')
        ],
        loader: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        include: [
          path.join(__dirname, 'node_modules/react-toolbox')
        ],
        loader: postcssLoader
      }
    ]
  }
}
