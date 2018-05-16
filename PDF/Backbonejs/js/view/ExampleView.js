let myTodo = new Todo({
    title: 'Check attributes property of the logged models in the console.'
});

let ExampleView = Backbone.View.extend({
   tagName: 'ul',

    className: 'Wasabi',
    id : 'number1',

    todoTpl: _.template("An Example Template"),

    events: {
       'dblclick label' : 'edit',
        'keypress .edit' : 'updateOnEnter',
        'blue .edit' : 'close'
    },

    initialize: function (options) {
        this.options = options || {};
    },

    render: function () {
        this.$el.html(this.todoTpl(this.model.attributes));
        this.input = this.$('.edit');
        return this;
    },

    edit: function () {
        // this method will execute when the user double clicks the label
    },

    close: function () {
        // this method will execute when the todos loses focus
    },

    updateOnEnter: function () {
        // this will execute with a keypress on .edit
    }

});

 let toDoView = new ExampleView({model: myTodo});

 console.log(toDoView.el);