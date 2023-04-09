const common = require("./webpack.config.js");
const path = require("path");

module.exports = {
  ...common,
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
