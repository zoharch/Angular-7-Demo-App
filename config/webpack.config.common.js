import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { root } from "./helpers.js"; // Assuming helpers.js exports a function named 'root'

const isDev = process.env.NODE_ENV !== "production";

export default {
  entry: {
    polyfills: root("src", "polyfills.ts"),
    main: isDev ? root("src", "main.ts") : root("src", "main.aot.ts"),
  },

  output: {
    path: root("dist"),
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
        include: root("src", "assets"),
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "to-string-loader",
          { loader: "css-loader", options: { sourceMap: isDev } },
          { loader: "sass-loader", options: { sourceMap: isDev } },
        ],
        include: root("src", "app"),
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
      directory: root("dist"),
    },
    compress: true,
    port: 4200,
    open: true,
  },
};
