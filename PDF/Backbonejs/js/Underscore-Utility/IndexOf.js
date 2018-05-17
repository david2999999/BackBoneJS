// indexOf(): return the index of a particular item within a collection
let people = new Backbone.Collection;

// the comparator function is sort the models by name
people.comparator = function(a, b) {
    return a.get('name') < b.get('name') ? -1 : 1;
};

let tom = new Backbone.Model({name: 'Tom'});
let rob = new Backbone.Model({name: 'Rob'});
let tim = new Backbone.Model({name: 'Tim'});

// each model that is added in is sorted alphabetically
people.add(tom);
people.add(rob);
people.add(tim);

console.log(people.indexOf(rob) === 0); // true
console.log(people.indexOf(tim) === 1); // true
console.log(people.indexOf(tom) === 2); // true