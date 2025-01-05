"use strict";

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const helpers = require("./helpers");

module.exports = merge(commonConfig, {
  mode: "development",

  devtool: "eval-cheap-module-source-map",

  output: {
    path: helpers.root("dist"),
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
            loader: "ts-loader",
            options: {
              configFile: helpers.root("tsconfig.json"),
            },
          },
          "angular2-template-loader", // Handles Angular templates and styles
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
        include: helpers.root("src", "app"),
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: helpers.root("dist"),
    },
    compress: true,
    port: 4200,
    stats: "minimal",
    open: true,
  },
});
