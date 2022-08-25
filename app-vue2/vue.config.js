const packageName = require('./package.json').name;

module.exports = {
    devServer: {
        port: 9001,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack:{
        output: {
            library: `${packageName}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${packageName}`,
        },
    }
}