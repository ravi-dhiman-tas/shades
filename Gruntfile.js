module.exports = function(grunt) {
    'use-strict';
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        clean: {
            clean_sass: {
                src: ['dist/css/*'],
                filter: 'isFile',
            },
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded', /* compressed, compact, nested */
                    sourcemap: 'none',
                    precision: 7
                },
                files: {
                    'dist/css/shades.css': 'source/shades.scss'
                }
            },
            dist_compressed: {
                options: {
                    style: 'compressed', /* compressed, compact, nested */
                    sourcemap: 'none',
                    precision: 7
                },
                files: {
                    'dist/css/shades.min.css': 'source/shades.scss'
                }
            }
        },
        watch: {
            options: {
                dateFormat: function(time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes...');
                },
            },
            watch_sass: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('remove',['clean:clean_sass']);
    grunt.registerTask('build',['sass:dist']);
    grunt.registerTask('production',['sass:dist_compressed']);
	grunt.registerTask('default',['watch']);
}
