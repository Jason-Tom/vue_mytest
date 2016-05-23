var path = require('path');
var webpack = require('webpack');

var loaders = [
  { test: /\.vue?$/, loader: "vue" },
  { test: /\.css$/, loader: 'style-loader!css-loader' }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: ["./main.js"],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  }
};
