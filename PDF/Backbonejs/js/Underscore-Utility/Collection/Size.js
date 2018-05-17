//size(): return the size of a collection
let todos = new Backbone.Collection();

todos.add([
    { title: 'go to Belgium.', completed: false , id: 100},
    { title: 'go to China.', completed: false, id: 2 },
    { title: 'go to Austria.', completed: true, id: 5}
]);

console.log(todos.size());

// equivalent to
console.log(todos.length);