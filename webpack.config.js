// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (devMode ? '[path][name].[ext]' : '[contenthash].[ext]'),
              publicPath: './',
              useRelativePaths: true 
            }
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ]
            }
          },
          'sass-loader'
        ]        
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};