const path = require("path");
const isPro = process.env.NODE_ENV === "production";

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: "/vue/",
    outputDir: "dist",
    assetsDir: "static",
    indexPath: "index.html",
    pages: {
        index: {
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "Vue3.0移动端基础模板",
            chunks: ["chunk-vendors", "chunk-common", "index"]
        }
    },
    lintOnSave: false,
    productionSourceMap: true,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            },
            sass: {
                // data: `@import "@/assets/css/common.scss";@import "@/assets/css/mixin.scss";`
            }
        },
        modules: false
    },
    devServer: {
        host: "localhost",
        port: 8084,
        https: false,
        hotOnly: false,
        open: true,
        proxy: {
            "/api": {
                target: "https://api.github.com",
                ws: true,
                changeOrigin: true
            },
            "/foo": {
                target: "<other_url>"
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    },
    chainWebpack(config) {
        config.resolve.alias.set("components", resolve("src/components"));
    },
    configureWebpack: () => {
        if (isPro) {
            return {
                plugins: [

                ]
            };
        }
    }
};
