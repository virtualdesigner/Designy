const path = require("path");
const HWP = require("html-webpack-plugin");

const htmlWebpackPlugin = new HWP({
  template: path.join(__dirname, "./src/index.html"),
  filename: "./index.html"
});

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
            // options: {
            //   modules: true,
            //   importLoaders: 1,
            //   localIdentName: "[name]_[local]_[hash:base64]",
            //   sourceMap: true,
            //   minimize: true
            // }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|jfif)$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
