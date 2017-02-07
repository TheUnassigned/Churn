var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' }
          }
        ],
        include: path.resolve(__dirname, './src')
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

  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    })
  ],

  stats: { colors: true },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    port: 3030,
    host: 'localhost',
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    proxy: {
      // OPTIONAL: proxy configuration:
      // '/optional-prefix/**': { // path pattern to rewrite
      //   target: 'http://target-host.com',
      //   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
      // }
    }
  }

}
