import path from 'path';
import { merge } from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import * as url from 'url';
import common from './webpack.common.js';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(dirname, 'dist'),
    open: true,
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },
  plugins: [new BundleAnalyzerPlugin()],
});
