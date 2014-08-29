import { equal } from 'qunit';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('dropdown-menu', 'DropdownMenuComponent', {
    needs: ['component:dropdown-menu-item']
});

test('renders default or custom title', function () {
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

test('renders list through yield', function () {
    var component = this.subject({
        template: Ember.Handlebars.compile(
            '{{#dropdown-menu}}' +
                '<li>First Menu Item</li>' +
                '<li>Second Menu Item' +
            '{{/dropdown-menu}}'
        )
    });

    var $component = this.append();

    equal($component.find('li').length, 2);
});
