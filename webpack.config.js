var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './public/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.css$/ , use: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [ new HtmlWebpackPlugin({
        template: 'public/index.html'
    })]
}