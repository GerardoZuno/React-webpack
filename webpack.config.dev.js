const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']  
    },
    mode: 'development',
    module: {
        rules: [
            {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             use: {
                 loader: 'babel-loader',
             }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
              },
              {
                test: /\.s[ac]ss$/,
                use: [
                      'style-loader',
                      'css-loader',
                      'sass-loader',
                    ]
              }  
        ]       
    },
    plugins: [
       new HtmlWebPackPlugin({         
               template: './public/index.html',
               filename: './index.html'           
       }),
       new MiniCssExtractPlugin({
           filename: '[name].css'
       })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 4000,
    },
}
  