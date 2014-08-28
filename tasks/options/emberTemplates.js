var grunt = require('grunt');

module.exports = {
    options: {
        templateBasePath: /lib\/ember-components\/templates\//,
        templateFileExtensions: /\.(hbs)/,
        templateRegistration: function(name, template) {
            return grunt.config.process("define('<%= package.namespace %>/templates/") + name + "', ['exports'], function(__exports__){ __exports__['default'] = " + template + "; });";
        }
    },
    templates: {
        options: {
            precompile: false
        },
        src: 'lib/ember-components/templates/**/*.hbs',
        dest: 'tmp/ember-components/templates.js'
    }
};
