let items = new Backbone.Collection;

items.add([{id: 1, name: "dog", age: 3}, {id: 2, name: "cat", age: 2}]);
items.add([{id: 1, name: "bear"}], {merge: true});
items.add([{id: 2, name: "lion"}]); // merge: false

console.log(JSON.stringify(items.toJSON()));
// [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
