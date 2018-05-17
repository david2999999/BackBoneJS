//keys() and values(): get lists of attribute names and values
let Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

let todo = new Todo({title: 'go to Austria.'});

console.log(todo.keys());
// logs: ["title", "completed"]

console.log(todo.values());
//logs: ["go to Austria.", false]