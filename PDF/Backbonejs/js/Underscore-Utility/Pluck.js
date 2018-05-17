// pluck(): extract a specific attribute

let todos = new Backbone.Collection();

todos.add([
    { title: 'go to Belgium.', completed: false },
    { title: 'go to China.', completed: false },
    { title: 'go to Austria.', completed: true }
]);

let titles = todos.pluck('title');
// returns list of title

console.log(titles);