module.exports = {
    basic: {
        options: {
            parallel: 2,
            framework: 'qunit',
            port: (parseInt(process.env.PORT || 7358, 10) + 1),
            test_page: 'test/index.html',
            src_files: [
                'test/index.html',
                'tmp/tests.js',
                'dist/ember-components.js',
                'dist/templates.js'
            ],
            launch_in_dev: ['PhantomJS', 'Chrome'],
            launch_in_ci: ['PhantomJS', 'Chrome']
        }
    }
};
