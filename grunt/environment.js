var fs = require('fs'),
	config = require('./config.js');
	grunt = require('grunt');

(function(){

	var task = function() {
		var data = this.data,
		src = config.buildTemplates + '/constants.environment.js',
		dest = config.app + '/core/constants/constants.environment.js';

		grunt.file.copy(src, dest, {
			process: function(contents) {
				return grunt.template.process(contents, {
					data: {
						APP_MOCK: data.APP_MOCK,
						PORT: data.PORT,
						HTTP: data.HTTP,
						IP_BACKEND: data.IP_BACKEND,
						APP_CORE: data.APP_CORE
					}
				});
			}
		});
	};

	grunt.registerMultiTask('environment', task);
})();

module.exports = {
	LOCAL: {
		APP_MOCK: true,
		PORT: 9000,
		HTTP: 'http://',
		IP_BACKEND: 'localhost',
		APP_CORE: 'bcp-fed-web'
	}
}