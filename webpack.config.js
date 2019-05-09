const path = require('path');
const alias = require('./scripts/webpack/aliases');

module.exports = {
  entry: './app/origin.jsx',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  node: {
    fs: 'empty',
  },
  resolve: { alias },
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
    ],
  },
};
