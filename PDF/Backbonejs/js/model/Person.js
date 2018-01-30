var Person = new Backbone.Model();

Person.on('change', function () {
    console.log("Name Changed");
});

Person.set('name', 'My name is Tim');

Person.set({'name': 'My name is Dav'}, {silent: true});
console.log(Person.get('name'));