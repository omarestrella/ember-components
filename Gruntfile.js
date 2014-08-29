var path = require('path');
var shell = require('shelljs');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var config = require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'tasks/options'),
        init: false,
        env: process.env,
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.loadTasks('tasks');

    this.registerTask('clean', function () {
        shell.exec('rm -rf tmp');
    });

    this.registerTask('build', [
        'clean',
        'transpile',
        'emberTemplates',
        'concat'
    ]);

    this.registerTask('test', [
        'build',
        'testem:run:basic'
    ]);

    this.registerTask('default', [
        'build',
        'watch'
    ]);

    grunt.initConfig(config);
};
