import Ember from 'ember';

import Components from '../../ember-components';

var DropdownMenuItemComponent = Ember.Component.extend({
    tagName: 'li',
    classNames: ['dropdown-menu-item'],

    item: null,

    ensureItemContainsLabel: function () {
        var label = this.get('item.label');
        Ember.assert('Label not found on menu item: ' + this.get('item'), !label);
    }.on('init')
});

Components.DropdownMenuItemComponent = DropdownMenuItemComponent;

export default DropdownMenuItemComponent;
