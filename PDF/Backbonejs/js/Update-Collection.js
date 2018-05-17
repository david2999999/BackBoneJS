let TodosCollection = new Backbone.Collection();

TodosCollection.add([
    {id: 1, title: 'go to Jamaica', completed: false},
    {id: 2, title: 'go to China', completed: false},
    {id: 3, title: 'go to DisneyLand', completed: false}
]);

TodosCollection.on("add", function (model) {
    console.log("Added " + model.get('title'));
});

TodosCollection.on("remove", function (model) {
    console.log("Removed " + model.get('title'));
});

TodosCollection.on("change:completed", function (model) {
    console.log("Completed " + model.get('title'));
});

TodosCollection.set([
    {id: 1, title: 'go to Jamaica', completed: true},
    {id: 2, title: 'go to China', completed: false},
    {id: 4, title: 'go to DisneyWorld', completed: false}
]);

// Above logs:
// Completed go to Jamaica.
// Removed go to Disneyland.
// Added go to Disney World.
