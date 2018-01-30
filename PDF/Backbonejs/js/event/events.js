var TodoView = Backbone.View.extend({
    tagName: "li",

    events: {
        'click .toggle': 'toggleCompleted',
        'dbclick .label' : 'edit',
        'keypress .edit' : 'updateOnEnter',
        'click .destory' : 'clear',
        'blue .edit' : 'close'
    }
});