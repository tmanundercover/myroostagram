
module.exports = function(grunt) {

  // Project configuration or grunt.loadTasks('directory') to read ALL js files here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //this level of the config object correspons a grunt plugin
    connect: {
      dev: {
        options: {
          base: ['prod', 'src', '.'],
          port: 8000,
          hostname: '*',
        }
      },
    },
    clean: {
      prod: 'prod',
    },
    copy: {
      app: {
        src: 'src/pages/index.html',
        dest: 'prod/index.html',
      },
    },
    'jshint': {
    build: {
        options: {
          jshintrc: '.jshintrc'
      },
        src: ['Gruntfile.js', 'build/**/*.js']
      },
        app: {
          options: {
            jshintrc: 'src/.jshintrc'
          },
          src: ['src/**/*.js']
        }
    },
    watch: {
      livereload: {
        options: {
          livereload: true,
        },
        files: ['Gruntfile.js','src/**/*.{js,html}', 'prod/*'],
        tasks: []
      },
      jshintrc: {
        files: ['**/*/.jshintrc'],
        tasks: ['jshint']
      },
      scripts: {
        files: ['<%= jshint.app.src %>'],
        tasks: ['jshint:app'],
      },
      page: {
        files: 'src/pages/*.html',
        tasks: ['copy:app'],
      },
    }
  });

  // Load Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Tasks.
  grunt.registerTask('dev',
    'Compile and start a dev webserver.',
    ['jshint:build','clean:prod','copy:app', 'connect:dev', 'watch']);
    
  grunt.registerTask('default', ['dev']);

};
