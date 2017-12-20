var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    vendor: ["./app/vendor.js"],
    app: ["./app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(html)$/,
        use: {
            loader: 'html-loader'
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: 1
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      chunks: [
        'vendor',
        'app',
      ],
    })
  ]
};