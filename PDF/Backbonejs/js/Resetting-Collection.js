let TodosCollection = new Backbone.Collection();

TodosCollection.on("reset", function () {
    console.log("Collection was resetted");
});

TodosCollection.add([
    { title: 'go to Jamaica.', completed: false },
    { title: 'go to China.', completed: false },
    { title: 'go to Disneyland.', completed: true }
]);

console.log('Collection size: ' + TodosCollection.length); // Collection size: 3

TodosCollection.reset([
    { title: 'go to Cuba.', completed: false }
]);

// Above logs 'Collection reset.'
console.log('Collection size: ' + TodosCollection.length); // Collection size: 1


// Another useful tip is to use reset with no arguments to clear out a collection
// completely. This is handy when dynamically loading a new page of results where
// you want to blank out the current page of results.