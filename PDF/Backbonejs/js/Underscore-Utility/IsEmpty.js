//isEmpty(): determine whether a collection is empty
let todos = new Backbone.Collection();

todos.add([
    { title: 'go to Belgium.', completed: false , id: 100},
    { title: 'go to China.', completed: false, id: 2 },
    { title: 'go to Austria.', completed: true, id: 5}
]);

let isEmpty = todos.isEmpty();

console.log(isEmpty);