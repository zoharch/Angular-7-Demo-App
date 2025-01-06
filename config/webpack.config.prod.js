import { merge as webpackMerge } from "webpack-merge";
import { AngularWebpackPlugin } from "@ngtools/webpack";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import cssnano from "cssnano";

import commonConfig from "./webpack.config.common.js";
import { root } from "./helpers.js"; // Assuming helpers.js exports a function 'root'

export default webpackMerge(commonConfig, {
  mode: "production",

  output: {
    path: root("dist"),
    publicPath: "/",
    filename: "[hash].js",
    chunkFilename: "[id].[hash].chunk.js",
  },

  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),

      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          discardComments: {
            removeAll: true,
          },
        },
        canPrint: false,
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: "@ngtools/webpack",
      },
    ],
  },

  plugins: [
    new AngularWebpackPlugin({
      tsConfigPath: root("tsconfig.aot.json"),
      entryModule: root("src", "app", "app.module#AppModule"),
    }),
  ],
});
