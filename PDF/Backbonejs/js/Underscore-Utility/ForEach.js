//forEach: iterate over collections

let todos = new Backbone.Collection();

todos.add([
    { title: 'go to Belgium.', completed: false },
    { title: 'go to China.', completed: false },
    { title: 'go to Austria.', completed: true }
]);

// iterate over models in the collection
todos.forEach(function(model){
    console.log(model.get('title'));
});

// Above logs:
// go to Belgium.
// go to China.
// go to Austria.