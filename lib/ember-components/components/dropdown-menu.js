import Ember from 'ember';

import Components from '../../ember-components';

var DropdownMenuComponent = Ember.Component.extend({
    classNames: ['dropdown-menu'],

    showMenu: false,

    title: null,

    actions: {
        toggleShowMenu: function () {
            this.toggleProperty('showMenu');
        }
    },

    dropdownTitle: function () {
        var title = this.get('title');
        if (!title) {
            return 'Select...';
        }

        return title;
    }.property('title')
});

Components.DropdownMenuComponent = DropdownMenuComponent;

export default DropdownMenuComponent;
