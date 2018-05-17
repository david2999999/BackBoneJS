// any(): confirm if any of the values in a collection pass an iterator
// truth test
let todos = new Backbone.Collection();

todos.add([
    { title: 'go to Belgium.', completed: false , id: 100},
    { title: 'go to China.', completed: false, id: 2 },
    { title: 'go to Austria.', completed: true, id: 5}
]);

let result = todos.any(function(model){
    return model.id === 100;
});
console.log(result);

// or
let result2 = todos.some(function(model){
    return model.id === 100;
});

console.log(result2);