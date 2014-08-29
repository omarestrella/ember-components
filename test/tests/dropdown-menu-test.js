import { equal } from 'qunit';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('dropdown-menu');

test('testing title renders correctly', function () {
    var component = this.subject();

    Ember.run(function () {
        component.set('title', null);
    });

    equal(this.$('.title').text().trim(), 'Select...');

    Ember.run(function () {
        component.set('title', 'Select Item');
    });

    equal(this.$('.title').text().trim(), 'Select Item');
});
