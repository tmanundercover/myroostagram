module.exports = function(grunt) {

  grunt.config.set('watch', {
    livereload: {
      options: {
        livereload: true,
      },
      files: ['src/**/*.{js,html}', 'prod/*'],
      tasks: [],
    },
    jshintrc: {
      files: ['**/.jshintrc'],
      tasks: ['jshint'],
    },
    build: {
      files: ['<%= jshint.build.src %>'],
      tasks: ['jshint:build'],
    },
    scripts: {
      files: ['<%= jshint.app.src %>'],
      tasks: ['jshint:app'],
    },
    page: {
      files: 'src/pages/*.html',
      tasks: ['copy:app'],
    },
    styles: {
      files: 'src/**/*.styl',
      tasks: ['stylus:dev'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
