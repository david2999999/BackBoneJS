let todos = new Backbone.Collection();

todos.add([
    { title: 'go to Belgium.', completed: false , id: 3},
    { title: 'go to China.', completed: false, id: 2 },
    { title: 'go to Austria.', completed: true, id: 5}
]);

// min()/max(): retrieve item with the min or max value of an attribute
let maxId = todos.max(function(model){
    return model.id;
}).id;
let minId = todos.min(function(model){
    return model.id;
}).id;

console.log(maxId + " " + minId);