module.exports = {
    // 静态文件输出目录
    assetsDir: "static",
    pages: {
        index: {

            // 页面的入口
            entry: './src/index/main.js',

            // 页面的模板
            template: './public/index.html',

            // build时输出的文件名
            filename: 'html/index.html',

            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '网站首页',

            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        detail: {

            // 页面的入口
            entry: './src/detail/main.js',

            // 页面的模板
            template: './public/detail.html',

            // build时输出的文件名
            filename: 'html/detail.html',

            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '网站详情',

            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'detail']
        }
    }
}