"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV !== "production";

const helpers = require("./helpers");

module.exports = {
  entry: {
    polyfills: helpers.root("src", "polyfills.ts"),
    main: isDev
      ? helpers.root("src", "main.ts")
      : helpers.root("src", "main.aot.ts"),
  },

  output: {
    path: helpers.root("dist"),
    filename: "[name].[contenthash].js",
    clean: true, // Built-in feature of Webpack 5 to clean the output directory
  },

  resolve: {
    extensions: [".ts", ".js", ".scss"],
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: isDev } },
          { loader: "sass-loader", options: { sourceMap: isDev } },
        ],
        include: helpers.root("src", "assets"),
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "to-string-loader",
          { loader: "css-loader", options: { sourceMap: isDev } },
          { loader: "sass-loader", options: { sourceMap: isDev } },
        ],
        include: helpers.root("src", "app"),
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource", // Webpack 5 built-in asset module
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  devtool: isDev ? "source-map" : false,

  devServer: {
    static: {
      directory: helpers.root("dist"),
    },
    compress: true,
    port: 4200,
    open: true,
  },
};
