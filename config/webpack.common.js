const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'js/bundle.js',
        // 非入口文件
        chunkFilename: devMode ? '[name].bundle.js' : '[name].[chunkhash:6].min.js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },{
            test: /\.less$/,
            loader: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'] // compiles Less to CSS
        }, {
            test: /\.(png|svg|jpe?g|gif)$/,
            // file-loader如果写成loader形式，生成的base64会再一次被合成文件
            // 会造成data-base显示不出来，故使用fallback
            use: {
                loader: 'url-loader',
                options: {
                    limit: 5120,
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: '../images/',
                    fallback: 'file-loader'
                }
            }
        },{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '../') }),
        new HtmlWebpackPlugin({
            title: 'H5-TODOLIST',
            template: './template/index.html',
            favicon: './template/favicon.ico',
            minify: { html5: true, minifyCSS: true, collapseWhitespace: true },
        }),
        // 保证vender不随用户代码改变而改变
        new webpack.HashedModuleIdsPlugin(),
        new CopyWebpackPlugin([{from: 'scripts', to: 'js'}])
    ]
};