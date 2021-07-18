module.exports = {
	publicPath: '/',
	runtimeCompiler: true,
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
		}
	}
}
