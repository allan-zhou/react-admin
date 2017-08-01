const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: path.resolve(__dirname, 'app/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'app/public',
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
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
          },
        },
      },
    ],
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'app/public'),
    // publicPath: 'http://localhost:8080/dist/',
  },
};
