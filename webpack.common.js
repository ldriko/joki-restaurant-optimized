import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default {
  entry: {
    app: path.resolve(dirname, 'src/scripts/index.js'),
    vendor: path.resolve(dirname, 'src/scripts/vendor.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(dirname, 'src/templates/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: path.resolve(dirname, 'src/templates/detail.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'favorites.html',
      template: path.resolve(dirname, 'src/templates/favorites.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(dirname, 'src/public/'),
          to: path.resolve(dirname, 'dist/'),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(dirname, 'src/app.webmanifest'),
          to: path.resolve(dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
