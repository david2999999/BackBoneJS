console.log("Hello im here");
let TodosCollection = new Backbone.Collection();

TodosCollection.on("add", function (todo) {
   console.log("I should " + todo.get("title") + ". Have I Done it before? " + (todo.get("completed") === true ? 'Yeah!' : 'No'));
});

TodosCollection.add([
    {title: 'go to Jamaica', completed: false},
    {title: 'go to China', completed: false},
    {title: 'go to DisneyLand', completed: true}
]);

// The above logs:
// I should go to Jamaica. Have I done it before? No.
// I should go to China. Have I done it before? No.
// I should go to Disneyland. Have I done it before? Yeah!
