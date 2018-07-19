const path = require('path')
const webpack = require('webpack')
const entries = require('./config/webpack-entry')
const htmlPlugins = require('./config/webpack-template')()
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const config = {
  entry: entries,
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        // include: __dirname,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.hbs$/,
        use: [{
          loader: 'handlebars-loader',
          query: {
            helperDirs: [
              path.join(__dirname, 'src', 'template/helpers')
            ],
            partialDirs: [
              path.join(__dirname, 'src', 'template/partial'),
            ],
            // inlineRequires: '\/assets/images\/'
          }
        }, {
          loader: 'extract-loader'
        }, {
          loader: 'html-loader'
        }]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new ExtractTextPlugin('css/[name].css'),
  ],
}

config.plugins = config.plugins.concat(htmlPlugins)

if (process.argv.indexOf('development') > -1) {
  config['devServer'] = {
    contentBase: 'dist',
    overlay: true,
    hot: true,
    inline: true,
    watchOptions: {
      poll: 1000
    }
  }
  config.plugins = config.plugins.concat(new webpack.HotModuleReplacementPlugin())
}

module.exports = config