const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: '[name].[hash:4].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/, // 獨立出來
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 設置 output 時的檔案名稱
                            name: '[path][name].[ext]',
                            // 用以限制須轉為 base64 的文件大小 (單位：byte)
                            limit: 8192,
                            // 超過大小及調用 file-loader
                            fallback: require.resolve('file-loader'),
                        }
                    },
                ],
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 // 設置 output 時的檔案名稱
            //                 name: '[path][name].[ext]',
            //                 // 修改公共路徑
            //                 // publicPath: '../',
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env'],
                        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                    }
                }
            },
            {
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                    }
                }
            }
        ]
    },
    plugins: [
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' }),
        // new CleanWebpackPlugin()
    ]
}