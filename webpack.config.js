const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: path.resolve(__dirname, 'app/index.js'),
    vendor: [
      'react', 'react-router', 'react-dom',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'app/public',
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: require('html-webpack-template'),
      mobile: true,
      hash: true,
      title: 'admin',
      appMountId: 'root',
      filename: 'index.html',
      minify: {
        collapseWhitespace: false,
      },
      meta: [
        {
          name: 'description',
          content: 'admin application demo',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
        }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: [['import', { libraryName: 'antd', style: true }]],
          },
        },
      },
    ],
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'app/public'),
    historyApiFallback: true,
  },
};
