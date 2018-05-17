// omit(): extract all attributes from a model except those listed
let Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

let todo = new Todo({title: 'go to Austria.'});

console.log(todo.omit('title'));
// logs {completed: false}