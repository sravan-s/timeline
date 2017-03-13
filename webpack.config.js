const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: "eslint-loader"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },

  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};

module.exports = config;
