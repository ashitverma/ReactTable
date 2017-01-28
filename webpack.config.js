var EncodingPlugin = require('webpack-encoding-plugin');
const webpack = require('webpack');

var config = {
   entry: './app.jsx',
   output: {
      path:'./',
      filename: 'index.js'
   },
   
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
         query: {
            presets: ['es2015', 'react']
         }
      },
      {
        test: /\.css$/,
        loader:'style!css!'
      }]
   }
};
module.exports = config;