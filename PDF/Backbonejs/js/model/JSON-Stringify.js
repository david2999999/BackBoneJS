var Todo = Backbone.Model.extend({
    initialize: function() {
        console.log('The model has been initialized');
    },

    defaults: {
        title: 'This is the default title',
        completed: false
    }
});

var todo1 = new Todo();
// console.log(JSON.stringify(todo1));

var todo2 = new Todo({
    title: 'Check the attribute of both model instances in the console',
    completed: true
});
// console.log(JSON.stringify(todo2));


var todo3 = new Todo({
    title: "This is todo number 3"
});

// console.log(JSON.stringify(todo3));

console.log(todo3.get('title'));
console.log(todo3.get('completed'));


var todo4 = new Todo({
    title: "This is the title is todo4",
    completed: true
});

console.log(todo4.get('title'));
console.log(todo4.get('completed'));


var stringifiedTodo4 = todo4.toJSON();
console.log(stringifiedTodo4);

todo4.set('title', 'This is done through set');
console.log(todo4.toJSON());

todo3.set({
    'title' : 'Todo3\'s title is set()',
    'completed' : true
});

console.log(todo3.toJSON());










