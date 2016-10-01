module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Gets name of project
        pkg: grunt.file.readJSON('package.json'),

        // Concatenates javascript files into one semi-colon delimited file.
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        // Launches a local web server
        connect: {
            options: {
                hostname: 'localhost',
                protocol: 'http'
            },
            server: {
                options: {
                  port: 8000,
                  livereload: true,
                  open: true
                }
            }
        },

        // Lints the javascript files
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        },

        // Compile sass into css
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/main.css': ['src/**/*.scss']
                }
            }
        },

        // Uglifies!
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: {
                  'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        // Monitors changes to files
        watch: {
            files: ['<%= jshint.files %>', 'src/**/*.scss'],
            tasks: ['build']
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['jshint']);

    // Other tasks.
    grunt.registerTask('build', ['jshint', 'sass', 'concat', 'uglify']);
    grunt.registerTask('web', [
        'build',
        'connect:server',
        'watch'
    ]);

};