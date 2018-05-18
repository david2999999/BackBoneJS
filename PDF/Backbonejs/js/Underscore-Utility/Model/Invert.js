// invert(): create object in which the values are keys and the attributes
// are values
let Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

let todo = new Todo({title: 'go to Austria.'});
console.log(todo.invert());
// logs: {'go to Austria.': 'title', 'false': 'completed'}