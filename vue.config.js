const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options"];

chromeName.forEach(name => {
    pagesObj[name] = {
        entry: `src/${name}/index.js`,
        template: `src/${name}/index.html`,
        filename: `${name}.html`
    };
});

const plugins =
  process.env.NODE_ENV === "development" ? 
      [{
          from: path.resolve("src/manifest.production.json"),
          to: `${path.resolve("dist")}/manifest.json`
      }, {
              from: path.resolve("src/images/logo.png"),
              to: `${path.resolve("dist")}/images/logo.png`
          }]
      :
      [{
          from: path.resolve("src/manifest.development.json"),
          to: `${path.resolve("dist")}/manifest.json`
      }, {
              from: path.resolve("src/images/logo.png"),
              to: `${path.resolve("dist")}/images/logo.png`
          }];

module.exports = {
    pages: pagesObj,
    productionSourceMap: false,
    configureWebpack: {
        plugins: [CopyWebpackPlugin(plugins)],
        entry: {
            'content': './src/content/index.js',
            'background':'./src/background/index.js',
        },
        output: {
            filename: 'js/[name].js'
        },
    },
    css: {
        extract: {
            filename: 'css/[name].css'
            // chunkFilename: 'css/[name].css'
        }
    }
};
