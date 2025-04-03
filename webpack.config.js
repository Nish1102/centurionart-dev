require('dotenv').config(); // Load environment variables

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    publicPath: isDev ? '/' : './'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true, quality: 65 },
              optipng: { enabled: false },
              pngquant: { quality: [0.65, 0.90], speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      }),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: isDev
        ? false
        : {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public/images', to: 'images' }]
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    isDev && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  devServer: {
    host: '0.0.0.0', // 🚀 Important line to allow access from outside
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 3005,
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*', 'public/**/*']
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fullySpecified: false
  }
};

