// groupBy(): group a collection into groups of like items
let todos = new Backbone.Collection();

todos.add([
    { title: 'go to Belgium.', completed: true },
    { title: 'go to China.', completed: false },
    { title: 'go to Austria.', completed: true }
]);

// create groups of completed and incomplete models
let byCompleted = todos.groupBy('completed');
let completed = new Backbone.Collection(byCompleted[true]);

console.log(completed.pluck('title'));
// logs: ["go to Austria."]