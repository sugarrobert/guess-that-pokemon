const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        assetModuleFilename: "images/[hash][ext][query]"
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        
        new MiniCssExtractPlugin(),
    ],

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.s?css$/i,
                
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: ""},
                    },
                    "css-loader", 
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}