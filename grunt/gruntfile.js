module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // chech our JS
        jshint: {
            options: {
                "bitwise": true,
                "browser": true,
                "curly": true,
                "eqeqeq": true,
                "eqnull": true,
                "esnext": true,
                "immed": true,
                "jquery": true,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "node": true,
                "strict": false,
                "trailing": true,
                "undef": true,
                "globals": {
                    "jQuery": true,
                    "alert": true
                }
            },
            all: [
                'gruntfile.js',
                '../assets/js/custom.js',
                '../assets/js/color-picker.js'
            ]
        },

        // concat and minify our JS
        uglify: {
            dist: {
                files: {
                    '../assets/js/scripts.min.js': [
                        '../assets/js/vendor/modernizr.js',
                        '../assets/js/vendor/jquery.js',
                        '../assets/js/vendor/fitvids.js',
                        '../assets/js/vendor/infinitescroll.js',
                        '../assets/js/vendor/analytics.js',
                        '../assets/js/custom.js'
                    ]
                }
            },
            'dist-cp': {
                files: {
                    '../assets/js/scripts.min.js': [
                        '../assets/js/vendor/modernizr.js',
                        '../assets/js/vendor/jquery.js',
                        '../assets/js/vendor/fitvids.js',
                        '../assets/js/vendor/cookie.js',
                        '../assets/js/color-picker.js',
                        '../assets/js/vendor/infinitescroll.js',
                        '../assets/js/vendor/analytics.js',
                        '../assets/js/custom.js'
                    ]
                }
            },
            'option-cp': {
                files: {
                    '../assets/js/scripts-with-cp.min.js': [
                        '../assets/js/vendor/modernizr.js',
                        '../assets/js/vendor/jquery.js',
                        '../assets/js/vendor/fitvids.js',
                        '../assets/js/vendor/cookie.js',
                        '../assets/js/color-picker.js',
                        '../assets/js/vendor/infinitescroll.js',
                        '../assets/js/vendor/analytics.js',
                        '../assets/js/custom.js'
                    ]
                }
            }
        },

        // compile our SCSS
        sass: {
            dev: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '../assets/css/style.css': '../assets/scss/style.scss'
                }
            },
            scheme4: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '../assets/css/style.css': '../assets/scss/schemes/color-scheme-4.scss'
                }
            },

        },

        // watch for changes
        watch: {
            scss: {
                files: ['../assets/scss/**/*.scss'],
                tasks: [
                    'sass:scheme4',
                    'notify:scss'
                ]
            },
            js: {
                files: [
                    '<%= jshint.all %>'
                ],
                tasks: [
                    'jshint',
                    'uglify:dist',
                    'notify:js'
                ]
            },
            inject: {
                files: [
                    '../assets/css/style.css'
                ],
                options: {
                    livereload: true
                }
            },
            hbs: {
                files: ['../**/*.hbs'],
                options: {
                    livereload: true
                }
            }
        },

        // notify via OSX
        notify: {
            scss: {
                options: {
                    title: 'Grunt, grunt!',
                    message: 'SCSS is all good'
                }
            },
            js: {
                options: {
                    title: 'Grunt, grunt!',
                    message: 'JS is all good'
                }
            }
        }

    });

    // Load NPM's via matchdep
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Development task
    grunt.registerTask('default', [
        'jshint',
        'uglify:dist',
        'sass'
    ]);

    grunt.registerTask('color-picker', [
        'jshint',
        'uglify:dist-cp',
        'sass'
    ]);

    grunt.registerTask('distribution', [
        'jshint',
        'uglify:dist',
        'uglify:option-cp',
        'sass'
    ]);
};