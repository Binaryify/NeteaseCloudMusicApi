// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import ignoreImport from 'rollup-plugin-ignore-import'

export default {
  input: './corejs/index.js',
  output: [
    {
      file: './dist/NeteaseCloudMusicApi.js',
      name: 'NeteaseCloudMusicApi',
      format: 'umd',
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    commonjs(),
    json(),
    ignoreImport({
      extensions: ['.js', '.jsx'],
      body: 'export default undefined',
      include: ['**/node_modules/crypto/**/*'],
    }),
  ],
}
