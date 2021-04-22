const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  outputDir: 'dist',
  //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  assetsDir: '',
  //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  indexPath: 'index.html',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))

    config.resolve.extensions
      .add('.js')
      .add('.vue')
      .add('.stylus')
  },
  css: {
    loaderOptions: {
      stylus: {
        import: '~@/assets/styles/variable.styl'
      }
    }
  },
  devServer: {
    port: 8088,
    open: true,
    hotOnly: true
  }
}
