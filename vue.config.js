const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin= require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
const config = {
    mode: process.env.NODE_ENV,
	entry: {
		path: path.join(__dirname, './src/index.js'),
		vendors:['vue','vue-router'] // 需要被提取为公共模块的群组
	},
	output: {path: path.resolve(__dirname, 'dist'), filename: 'js/[name].[hash:5].js'},
	devServer: {
        contentBase: './dist',
		host: '0.0.0.0', // 域名，能被外部访问
		port: 8848, // 端口
		disableHostCheck: true, // 检查hostname
		open: true, // 自动打开浏览器
        compress: true, // 是否启用gzip压缩
		historyApiFallback: true, // 当使用html5 history api将会响应404时返回index.html
		inline: true, // inline和iframe两种模式；inline将构建信息插入到bundle中，iframe再通知栏下方显示构建信息
		hot: true, // 启动模块热更新
        hotOnly: true, // 当编译失败时，不刷新页面
        progress: false, // 打包进度条
		overlay: { // 在浏览器上全屏显示编译的warnings和errors
            warnings: true,
            errors: true
        },
		proxy: {
			'/api': { // 拦截匹配
				target: 'http://localhost:9000', // 被代理地址
				changeOrigin: true, // 允许websockets跨域
				pathRewrite: { // 重写path
					'^/api': ''
				}
			}
		}
    },
	plugins:[
		new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({ // 生成html文件
			filename: 'index.html',
			template: path.join(__dirname, './src/index.html'),
			minify: {
			    removeComments:true, // 清理注释，但注释的位置以空行保留
			    removeCommentsFromCDATA:true, // 从脚本和样式中删除注释
                collapseWhitespace:true, // 清理html中的空格、换行符
                collapseBooleanAttributes:true, // 是否简写布尔格式属性，disabled="disabled",简写为disabled
                removeRedundantAttributes:true, // 删除多余的属性
                useShortDoctype:true, // 使用短的文本类型
                removeAttributeQuotes:true, // 是否移除属性的引号
                removeEmptyElements: false, // 清理内容为空的元素,慎用,空元素可能用于占位或在js逻辑里有填充动作
                removeEmptyAttributes:true, // 是否删除空属性
                removeScriptTypeAttributes: false, // 去掉script标签的type属性,不建议设置这个配置项，因为用户浏览器的默认脚本解析语言可能被改成vbscript或者其他
                removeStyleLinkTypeAttributes:true, // 去掉style和link标签的type属性
                keepClosingSlash:true, // ？
                minifyJS:true, // 压缩html内的js
                minifyCSS:true, // 压缩html内的样式
                minifyURLs:true // 压缩url
			}
		}),
		new MiniCssExtractPlugin({
			filename: "css/style.css",
			chunkFilename: "css/[name].[hash:5].css"
		}),
		new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin()
	],
	module: {
		rules:[
			{
			    test: /\.vue$/,
                loader: "vue-loader"
            },
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('src'), resolve('test')],
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			},
			{ test: /\.(sa|sc|c)ss$/,
                use: [
				    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							prependData: `@import "./src/core/navBar.scss";`
						}
					}
				]
			},
			{
			    test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [{
			        loader: 'url-loader',
                    options: {
			            limit: 10000,
                        name: 'static/fonts/[hash:8].[name].[ext]'
			        }
			    }]
            },
			{
			    test: /\.(png|jpg|jfif|jpeg|gif)$/,
                use: [{
			        loader: 'url-loader',
                    options: {
			            limit: 8192,
                        name: 'static/images/[hash:8].[name].[ext]'
			        }
			    }]
            }
		]
	},
	optimization:{
		minimizer:[
		    new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ],
		splitChunks:{
            chunks: "initial", // 默认作用于异步chunk，值为all/initial/async/function(chunk)
            minSize: 30000,  // 表示在压缩前的最小模块大小,默认值是30kb
            minChunks: 1,  // 表示被引用次数，默认为1；
            maxAsyncRequests: 5,  // 所有异步请求不得超过5个
            maxInitialRequests: 3,  // 初始话并行请求不得超过3个
            automaticNameDelimiter:'~', // 名称分隔符，默认是~
            name: true,  // 打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
		    cacheGroups:{
                vendor:{
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                styles:{
                    name: 'styles',
                    test: /\.(sa|sc|c)ss$/,
                    enforce: false
                },
                commons:{
                    name: "commons",
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
		    }
		},
		runtimeChunk: {
			name: entrypoint => `manifest.${entrypoint.name}`
		}
	},
	resolve: {
		extensions: ['.js', '.json', '.vue'],
		alias: {
		  'vue$': 'vue/dist/vue.esm.js',
		  '@': path.resolve(__dirname, './src'),
		  '#': path.resolve(__dirname, './src/assets')
		}
	},
	devtool: devMode ? '#cheap-module-eval-source-map' : '#cheap-module-source-map',
};

module.exports = config;
