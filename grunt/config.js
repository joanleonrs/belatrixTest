/* Variables para configurar grunt */
var vendor = 'bower_components';

module.exports = {
	app: 'app',
	port: 9000,
	vendor: '/bower_components',
	buildTemplates: 'build-templates',
	appCore: '/core',
	appViews: '/views',
	jsDependencies: [
		vendor + '/jquery/dist/jquery.min.js',
		vendor + '/angular/angular.min.js',
		vendor + '/bootstrap/dist/js/bootstrap.min.js',
		vendor + '/angular-ui-router/release/angular-ui-router.min.js',
		vendor + '/angular-animate/angular-animate.min.js',
		vendor + '/angular-material/angular-material.min.js',
		vendor + '/oclazyload/dist/ocLazyLoad.min.js',	
		vendor + '/angular-bootstrap/ui-bootstrap-tpls.min.js'
	],
	cssDependencies: [
		'css/dist/app.css'
	]
}