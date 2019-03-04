module.exports = {
	plugins: [
		require('autoprefixer'),
		require('postcss-preset-env')({
			stage: 2,
			browsers: 'last 2 versions'
	})
	]
}
  