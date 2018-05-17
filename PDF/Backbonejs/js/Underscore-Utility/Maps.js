let count = 1;

let todos = new Backbone.Collection();

todos.add([
    { title: 'go to Belgium.', completed: false },
    { title: 'go to China.', completed: false },
    { title: 'go to Austria.', completed: true }
]);

console.log(todos.map(function(model){
    return count++ + ". " + model.get('title');
}));

// Above logs:
//1. go to Belgium.
//2. go to China.
//3. go to Austria.
