import Ember from 'ember';

import resolver from 'helpers/resolver';

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Ember.testing = true;

require('ember-qunit').setResolver(resolver);

window.App = Ember.Application.createWithMixins({
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION: true,
    LOG_VIEW_LOOKUPS: true
});

window.App.setupForTesting();
window.App.injectTestHelpers();
