var config = require('./config.js');

module.exports = {
	src: {
		files: [
			config.app + '/**/*.js',
			config.app + '/**/*.html',
			config.app + '/**/*css'
		],
		options: {
			livereload : true
		}
	}
}