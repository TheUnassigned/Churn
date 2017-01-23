
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  context: path.resolve(__dirname, './src'),
  entry: './main',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // this allows us to import these filetypes without writing the extension
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ],
  module: {
    loaders: [
      // babel transpiling for react jsx and > es6
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
