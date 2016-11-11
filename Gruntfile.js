module.exports = function(grunt) {
    'use-strict';
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/shades.min.css': 'source/shades.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['source/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
