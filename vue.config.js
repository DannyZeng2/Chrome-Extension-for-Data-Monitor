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
      }]
      :
      [{
          from: path.resolve("src/manifest.development.json"),
          to: `${path.resolve("dist")}/manifest.json`
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
    },
    chainWebpack: config => {
        // 查看打包组件大小情况
        if (process.env.npm_config_report) {
            // 在运行命令中添加 --report参数运行， 如：npm run build --report
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
            config
                .module
                .rule("images")
                .test(/\.(jpg|png|gif)$/)
                .use("url-loader")
                .loader("url-loader")
                .options({
                    limit:10,
                    publicPath: 'assert' ,
                    outputPath: 'assert',
                    name: '[name].[ext]',
                })
                .end()
        }
    }

};
