var config = require('./config.js');

module.exports = {
	server: {
		options: {
			port: config.port,
			hostname: 'localhost',
			base: config.app
		}		
	}
}