var config = require('./config.js');

	var grunt = require('grunt');

	var fs = require('fs');

	/* Tarea de ocLazyLoad para la creacion de modulos */
	
	(function () {
			
		var ext = function (ext) {
			var extRE = new RegExp('^[^_]+\.' + ext + '$');
			return RegExp.prototype.test.bind(extRE);
		};
		
		var directory = function (dir) {
			var dirRE = new RegExp('^' + dir);
			return RegExp.prototype.test.bind(dirRE);
		};

		var task = function () {

			var dir = this.data.dir,
				files = this.filesSrc,
				src = 'build-templates' + '/' + this.data.fileTemplate,
				dest = this.data.dest + this.data.fileTemplate;

			var relativePath = function (file) {
				return file.replace(dir + '/', '');
			};
			
			var scripts = files.filter(ext('.js|.css')).map(relativePath),
				modules = files.filter(ext('module.js')).map(relativePath);

			var views = [];

			modules.forEach(function(module) {

				var path = module.slice(0, module.lastIndexOf('/'));

				var fileContent = fs.readFileSync('app/' + module, 'utf8');

				var dependencies = scripts.filter(directory(path)).map(relativePath);

				var _dependencies = [];
				
				dependencies.forEach(function(file, k) {
					if(file.slice(0, file.lastIndexOf('/')) !== path) { 
						var _f = fs.readdirSync('app/' + file.slice(0, file.lastIndexOf('/') + 1));
						if(_f.filter(ext('module.js')).length == 0) {  
							_dependencies.push(file);
						}
					} else {
						if(module !== file) {
							_dependencies.push(file);
						}
					}
				});
					
				// Agrega la final al propio modulo ya que este depende de los otros .js
				_dependencies.push(module);
					
				views.push({
					name: fileContent.match(/module\(\'(.*)\'/)[1].split('\'')[0],
					files: _dependencies
				})
			});
				
			grunt.file.copy(src, dest, {
				process: function (contents) {
					return grunt.template.process(contents, {
						data: { ocLazyLoad: {
							views: views
						}}
					});
				}
			});
		};

		grunt.registerMultiTask('ocLazyLoad', task);

	})();

/* Template de modulos para vista y componentes */

module.exports = {

	buildView: {
		cwd: config.app,
		src: ['views/**/*.js', 'views/**/*.css'],
		fileTemplate: 'oclazyload.view.js',
		dest: config.app + '/core/modules/'
	}

};