let Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

let TodoCollection = Backbone.Collection.extend({
   model: Todo
});

let myTodo = new Todo({
    title: 'Read the book',
    id: 2
});

var todos = new TodoCollection([myTodo]);

console.log("Collection size: " + todos.length);