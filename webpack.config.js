const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const global_patch = fs.readFileSync('./corejs/util/global_patch.js', 'utf8')

module.exports = {
  optimization: {
    minimize: false,
  },
  entry: './corejs/index.js',
  externals: {
    context: __dirname + './corejs/module',
    cloud: 'cloud',
    voice_upload: 'voice_upload',
  },
  output: {
    filename: 'NeteaseCloudMusicApi.js',
    path: __dirname + '/dist',
    library: 'NeteaseCloudMusicApi',
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  plugins: [new webpack.BannerPlugin({ banner: global_patch, raw: true })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['transform-commonjs'],
            },
          },
        ],
      },
    ],
  },
}
