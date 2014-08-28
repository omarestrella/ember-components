import Ember from 'ember';

var Components = Ember.Namespace.create({
    name: 'Ember Components',
    VERSION: '0.1.0'
});

if (Ember.libraries) {
    Ember.libraries.register('Ember Components', Components.VERSION);
}

Ember.EmberComponents = Components;

export default Components;
