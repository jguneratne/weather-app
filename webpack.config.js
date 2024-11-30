const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

module.exports = {
  stats: { children: true },
  mode: "development",
  devtool: "source-map",

  output: {
    path: path.join(__dirname, "dist/"),
    clean: true,
  },

  resolve: {
    alias: {
      "@scripts": path.join(__dirname, "src/js"),
      "@styles": path.join(__dirname, "src/styles"),
      "@images": path.join(__dirname, "src/assets/imgs"),
      "@fonts": path.join(__dirname, "src/assets/fonts"),
    },
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: [
        {
          import: "./src/views/index.html", // template file
          filename: "index.html", // => dist/index.html
          data: {
            title: "Weather App",
          }, // pass variables into template
        },
      ],

      js: {
        // output filename for JS
        filename: "js/[name].[contenthash:8].js",
      },

      css: {
        // output filename for CSS
        filename: "css/[name].[contenthash:8].css",
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "css-loader",
            options: {
              import: false, // disable @import at-rules handling
            },
          },
        ],
      },
      {
        test: /[\\/]fonts|node_modules[\\/].+(woff(2)?|ttf|otf|eot|svg)$/i,
        type: "asset/resource",
        generator: {
          // keep original directory structure
          filename: ({ filename }) => {
            const srcPath = "src/assets/fonts";
            const regExp = new RegExp(
              `[\\\\/]?(?:${path.normalize(srcPath)}|node_modules)[\\\\/](.+?)$`,
            );
            const assetPath = path.dirname(
              regExp.exec(filename)[1].replace("@", "").replace(/\\/g, "/"),
            );

            return `fonts/${assetPath}/[name][ext][query]`;
          },
        },
      },
      {
        test: /\.(png|jpe?g|ico|webp|avif|svg|)$/,
        type: "asset/resource",
        generator: {
          filename: ({ filename }) => {
            // Keep directory structure for images in dist folder
            const srcPath = "src/assets/imgs";

            const regExp = new RegExp(
              `[\\\\/]?(?:${path.normalize(srcPath)}|node_modules)[\\\\/](.+?)$`,
            );
            const assetPath = path.dirname(
              regExp.exec(filename)[1].replace("@", "").replace(/\\/g, "/"),
            );

            return `imgs/${assetPath}/[name].[contenthash:8][ext]`;
          },
        },
      },
    ],
  },

  //  enable HMR with live reload
  devServer: {
    static: path.resolve(__dirname, "dist"),
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
};
