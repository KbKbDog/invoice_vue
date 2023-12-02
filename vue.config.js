// vue.config.js

//const path = require("path");
module.exports = {

  // 所有 webpack-dev-server 的选项都支持。
  // 注意：有些值像 host、port 和 https 可能会被命令行参数覆写。
  // 有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 publicPath 同步以保障正常的工作。
  // 本地服务配置
  devServer: {
    // 配置跨域代理
    proxy: {
      // 关于vue proxy请求代理请看：
      // https://blog.csdn.net/lwx931449660/article/details/133775316?spm=1001.2014.3001.5501

      // 配置：
      // '/api'可以是任何值，表示以/api开头的请求，实际项目中所以路径以/api开头的请求都会被本地服务器转发
      '/api': {
        // target指想要被代理的后端接口服务器地址(目标路径)(真正请求的服务器地址)
        target: 'http://localhost:8081',
        // 设置为true后，请求头中的host值会被设置成目标URL(target)中的host值
        changeOrigin: true,
        // pathRewrite用以在发送请求时，重写请求路径
        // 如果在实际的请求路径中你不希望出现/api，那么可以重写路径，在请求路径中去掉/api，如下所示
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
  }
};