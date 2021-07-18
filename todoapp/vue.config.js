const fs = require('fs')

module.exports = {
	publicPath: '/',
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'ardc ToDo App'
				return args
			})
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: fs.readFileSync('src/variables.scss', 'utf-8')
			}
		}
	}
}
