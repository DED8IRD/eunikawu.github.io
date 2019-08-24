// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            maxSize: 244000,
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    chunks: 'all',
                    test: /node_modules/
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '../index.html'
        }),
        new ImageminPlugin({
            pngquant: ({ quality: [0.5, 0.5] }),
            plugins: [imageminMozjpeg({ quality: 50 })]
        }),
        new CopyWebpackPlugin([
            { from: 'static/images', to: './dist/static/images' }
        ])
    ],
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: (devMode ? '[path][name].[ext]' : '[contenthash].[ext]'),
                        publicPath: './',
                        useRelativePaths: true
                    }
                }],
            },
            {
                test: /\.(scss)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //   hmr: devMode,
                        // },
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
    }
};