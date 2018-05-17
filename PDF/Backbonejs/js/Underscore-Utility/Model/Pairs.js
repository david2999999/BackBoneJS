//pairs(): get list of attributes as [key, value] pairs
let Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

let todo = new Todo({title: 'go to Austria.'});
let pairs = todo.pairs();

console.log(pairs[0]);
// logs: ["title", "go to Austria."]
console.log(pairs[1]);
// logs: ["completed", false]