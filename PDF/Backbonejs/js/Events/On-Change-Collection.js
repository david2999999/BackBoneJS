let TodosCollection = new Backbone.Collection();

TodosCollection.on("change:title", function (model) {
    console.log("Changed my mind! I should go " + model.get('title'));
});

TodosCollection.add([
    {
        title: 'go to Jamaica', completed: false, id: 3
    }
]);

let myTodo = TodosCollection.get(3);

myTodo.set('title', 'fishing');

