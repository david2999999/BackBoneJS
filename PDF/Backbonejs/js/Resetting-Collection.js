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
