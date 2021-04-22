import path from 'path'
import { string } from 'rollup-plugin-string'

export default {
  plugins: [
    string({
      include: '**/*.html',
      exclude: path.join(__dirname, 'index.html')
    })
  ]
}