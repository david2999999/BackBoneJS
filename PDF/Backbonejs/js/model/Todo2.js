var Todo = Backbone.Model.extend({
    initialize: function () {
        console.log("Todo has been initialized");
    },

    defaults : {
        title: '',
        completed: false
    },

    setTitle: function (newTitle) {
        this.set('title', newTitle);
    }
});

var toDo = new Todo();

toDo.set('title', 'This is a new title');
console.log(toDo.toJSON());
toDo.setTitle('This is a new title from the method');
console.log(toDo.toJSON());

toDo.set('completed', true);
console.log(toDo.toJSON());