const path = require("path");
const { AngularCompilerPlugin } = require("@ngtools/webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // or 'development'
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.html$/,
        use: "html-loader", // Use html-loader for processing HTML files
      },
      {
        test: /\.json$/,
        type: "javascript/auto", // Webpack 5 automatically handles JSON files
      },
      {
        test: /\.wasm$/,
        type: "webassembly/experimental", // For WASM files
      },
    ],
  },
  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: "./tsconfig.app.json",
      entryModule: path.resolve(__dirname, "src/app/app.module#AppModule"),
      sourceMap: true,
    }),
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your HTML template
      filename: "index.html", // The output filename (default is 'index.html')
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve static files from the dist folder
    },
    hot: true, // Enable Hot Module Replacement
  },
};
