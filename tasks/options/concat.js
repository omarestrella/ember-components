module.exports = {
    options: {
        separator: ''
    },
    src: {
        src: ['tmp/ember-components/src/**/*.js'],
        dest: 'dist/ember-components.js'
    },
    templates: {
        src: ['tmp/ember-components/templates.js'],
        dest: 'dist/templates.js'
    },
    tests: {
        src: ['tmp/tests/**/*.js'],
        dest: 'tmp/tests.js'
    }
};
