//pick(): extract a set of attributes from a model
let Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

let todo = new Todo({title: 'go to Austria.'});
console.log(todo.pick('title'));
// logs {title: "go to Austria"}