const { clear } = require('console');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'new1.js',
    clean: true

  },
  plugins: [
     /**
     * HtmlWebpackPlugin 用于生成 HTML 文件，并自动注入打包后的脚本
     * template: 指定 HTML 模板文件的路径
     * filename: 指定生成的 HTML 文件的路径
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/new1.html'),
      filename: path.resolve(__dirname, 'dist/index.html'),
    }),
     /**
     * MiniCssExtractPlugin 用于将 CSS 提取到单独的文件中
     */
    new MiniCssExtractPlugin()
    
  ],
  module: {
    rules: [
      {
         /**
         * test: 使用正则表达式匹配需要处理的文件类型
         * 这里匹配所有以 .css 结尾的文件
         */
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'], //* use: 指定处理匹配文件的 将css文件打包到js文件中
        
        use: [process.env.NODE==="production"?  'style-loader': MiniCssExtractPlugin.loader, "css-loader"]
       
        //* MiniCssExtractPlugin.loader: 将 CSS 提取到单独的文件中
      },
    ],
  },
  optimization: {
    minimizer: [
       // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ]
  }
  
};