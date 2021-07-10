const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development';

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
        new HtmlWebpackPlugin({ template: './index.html' })
    ]
}