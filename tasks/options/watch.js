module.exports = {
    javascript: {
        files: [
            'lib/**/*.js'
        ],
        tasks: [
            'transpile:main',
            'concat:src'
        ]
    },
    templates: {
        files: [
            'lib/**/*.hbs'
        ],
        tasks: [
            'emberTemplates',
            'concat:templates'
        ]
    },
    tests: {
        files: [
            'test/**/*.js'
        ],
        tasks: [
            'transpile:test',
            'concat:tests'
        ]
    }
};
