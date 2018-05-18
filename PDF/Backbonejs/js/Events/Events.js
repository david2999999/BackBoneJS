let TodoView = Backbone.View.extend({
    tagName: 'li',

    events: {
        'click .toggle': 'toggleCompleted',
        'dblclick label' : 'edit',
        'keypress .edit': 'updateOnEnter',
        'click .destroy': 'clear',
        'blue .edit': 'close'
    }
});