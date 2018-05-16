let Person = new Backbone.Model({
    name: 'Jeremy'
});

Person.validate = function (attrs) {
    if(!attrs.name){
        return 'The name is required';
    }
};

Person.set({name: 'Samuel'});
console.log(Person.get('name'));

// this method will not unset the name
// because of the validation
Person.unset('name', {validate: true});
console.log(Person.get('name'));