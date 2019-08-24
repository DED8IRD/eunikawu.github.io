// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'


module.exports = {
    mode: (devMode ? 'development' : 'production'),
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
        new CopyWebpackPlugin([{
            from: 'img/**/**',
            to: path.resolve(__dirname, 'dist')
        }])
    ],
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif|ico|svg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: (devMode ? '[path][name].[ext]' : '[contenthash].[ext]'),
                            publicPath: './',
                            useRelativePaths: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {

                test: /\.(scss)$/,
                use: [{
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
    }
};