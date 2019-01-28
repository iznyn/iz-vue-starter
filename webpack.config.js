var path = require('path')
var webpack = require('webpack')
var inProduction = (process.env.NODE_ENV === 'production')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var glob = require('glob-all')
var PurifyCSSPlugin = require('purifycss-webpack')
module.exports = {
  entry: {
    app: [
      './src/main.js',
      './src/sass/styles.sass',
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {

            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@services': path.resolve(__dirname, 'src/services'),
      'jquery': "jquery/src/jquery"
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync([
        path.join(__dirname, 'index.html'),
        path.join(__dirname, 'src/**/*.vue')
      ]),
      minimize: inProduction
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
}

if (inProduction) {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
