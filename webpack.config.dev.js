var path = require('path')

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },

  module: {
    rules: [
      /* {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, './src'),
        enforce: 'pre',
        loader: 'source-map'
      }, */
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(xml|html|txt|md)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        loader: 'url-loader'
      }
    ]
  },

  stats: { colors: true },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    port: 3030,
    host: 'localhost',
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    open: true,
    proxy: {
      // OPTIONAL: proxy configuration:
      // '/optional-prefix/**': { // path pattern to rewrite
      //   target: 'http://target-host.com',
      //   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
      // }
    }
  }

}
