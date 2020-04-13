const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')//очищение в папке dist от страых фаилов
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === "development"// определение режим разработки
const isProd = process.env.NODE_ENV === "production"// определение режим сборки

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
const cssLoaders = extra => {
	cssloader = [
	{
        loader: MiniCssExtractPlugin.loader,
        options: {
        	hmr: isDev,//без презагрузки страницы
        	reloadAll: true,
        },
	},
	'css-loader'
	]

	if(extra){
		cssloader.push(extra)
	}

	return cssloader
}

module.exports = {
	context: path.resolve(__dirname, 'src'), //работать с папкой src
	mode: 'development',
	entry: {
    	main: ['@babel/polyfill','./index.jsx']
  	},
	output: {
		filename: '[name].[hash].js',
		path : path.resolve(__dirname, 'dist')	
	},
	plugins: [
	    new HtmlWebpackPlugin({
	    	title: 'webpack',
	    	template: './index.html'
	    }),
	    new CleanWebpackPlugin(),
	    new MiniCssExtractPlugin([{
			filename: filename('css'), //формирование для разных фаилов и для обхода кэша
			path: path.resolve(__dirname, 'dist')
		}])
  ],
  module: {
  	rules: [
  		{
			test: /\.css$/,
			use: cssLoaders()

		},
		{
			test: /\.scss$/,
			use: cssLoaders('sass-loader')
		},
  		{ 
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: { 
				loader: "babel-loader",
				options: {
					presets: ['@babel/preset-env']
				}
			} 
		},
		{
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: {
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react'
					],
					plugins : ['@babel/plugin-proposal-class-properties']
				}
			}
		}
  	]
  }
}