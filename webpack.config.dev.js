/* Can using ES6 Script to write in webpack config, because we have already config babel */
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry:[
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output:{
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugin: [],
  module:{
    loaders: [
      {test: /\.js$/, exclude: /node_module/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }

}
