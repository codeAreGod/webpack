var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
	// 入口
	entry:{
		app: __dirname+'/src/scripts/index.js'
	},

	//source-map
	devtools:'source-map',

	devServer:{
		// contentBase:__dirname + '/www',
		// port:8080,
		inline:true,
		proxy: {
          '/posts/*': {
              target: 'http://localhost:3000',
              secure: false
          },
          '/comments/*': {
              target: 'http://localhost:3000',
              secure: false
          },
          "/profile/*": {
              target: 'http://localhost:3000',
              secure: false
          },
        }
	},
	// 出口
	output:{
		path: __dirname + '/www',
		filename:'js/index.js'
	},

	//配置模块
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel'
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				loader: "style!css!sass"
			}
		]
	},

	plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html',to:'./'},
            { from: './src/images',to:'./images',ignore:['img4.jpg'],toType: 'dir'}
        ])
    ]
}

/*
webpack -p 可以压缩代码
 */
/*
cnpm i webpack -g
cnpm i webpack --save-dev
cnpm i webpack-dev-server -g
cnpm i babel-loader babel-core babel-preset-es2015 -D
cnpm i css-loader style-loader --save-dev
cnpm i sass-loader node-sass --save-dev
cnpm install -g json-server 利用json-server处理模拟数据，利用proxy进行地址代理
json-server --watch db.json
*/
