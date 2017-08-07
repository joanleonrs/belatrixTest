/*  Archivo de configuracion de grunt 
 *  el cual indexa diversas tareas
 */

'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json')
	  
/*	  copy: {
	      main: {
	        expand: true,
	        cwd: 'bower_components',
	        src: '**',
	        dest: 'js'
	      },
    	},*/
    }
  });
  
  /*grunt.loadNpmTasks('grunt-contrib-copy');*/
};