import { merge as webpackMerge } from "webpack-merge";
import { AngularWebpackPlugin } from "@ngtools/webpack";

import commonConfig from "./webpack.config.common.js";
import { root } from "./helpers.js";

export default webpackMerge(commonConfig, {
  mode: "development",

  devtool: "eval-cheap-module-source-map",

  output: {
    path: root("dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
  },

  optimization: {
    emitOnErrors: false,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "@ngtools/webpack", // Use AngularCompilerPlugin
            options: {
              tsConfigPath: root("tsconfig.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "to-string-loader",
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
        include: root("src", "app"),
      },
    ],
  },

  plugins: [
    new AngularWebpackPlugin({
      tsConfigPath: root("tsconfig.json"), // Path to your tsconfig.json
      entryModule: root("src/app/app.module#AppModule"), // Entry module for AOT
      sourceMap: true, // Enable source maps
    }),
  ],

  devServer: {
    historyApiFallback: true,
    static: {
      directory: root("dist"),
    },
    compress: true,
    port: 4200,
    open: true,
    client: {
      logging: "info", // Log level for the browser console
    },
  },
});
