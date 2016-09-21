var webpack = require('webpack')

module.exports = {
    entry: './entry.js',
    // 配置输入文件
    output: {
        path: __dirname,
        // 当前绝对路径
        filename: 'bundle.js'
            // 配置输出文件
            // 这里配置好了不用在命令行再写输入输出名
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }
            // css需要相应的加载器翻译，默认只支持js
            // 放置相应的加载器
        ]
    },
    plugins: [
            new webpack.BannerPlugin('This file is created by zhaoda')
        ]
        // 插件，为输出文件头部添加注释
}
