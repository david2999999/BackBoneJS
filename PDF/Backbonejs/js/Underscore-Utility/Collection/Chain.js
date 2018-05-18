// The chain() method returns an object that has all of the Underscore array
// operations attached as methods which return that object. The chain ends with
//     a call to the value() method which simply returns the resulting array value.

let collection = new Backbone.Collection([
    { name: 'Tim', age: 5 },
    { name: 'Ida', age: 26 },
    { name: 'Rob', age: 55 }
]);

let filteredNames = collection.chain().filter(function (item) {
    return item.get('age') > 10;
}).map(function (item) {
    return item.get('name');
}).value();

console.log(filteredNames); // logs: ['Ida', 'Rob']