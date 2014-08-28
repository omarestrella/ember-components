module.exports = {
    main: {
        type: 'amd',
        files: [
            {
                expand: true,
                cwd: 'lib/',
                src: ['ember-components/**/*.js'],
                dest: 'tmp/ember-components/src'
            },
            {
                expand: true,
                cwd: 'lib/',
                src: ['ember-components.js'],
                dest: 'tmp/ember-components/src'
            }
        ]
    },
    test: {
        type: 'amd',
        files: [
            {
                expand: true,
                cwd: 'test/',
                src: ['**/*.js'],
                dest: 'tmp/tests'
            }
        ]
    }
};
