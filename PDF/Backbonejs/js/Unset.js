var Person = new Backbone.Model({ name : 'Tim'});

Person.validate = function (attrs) {
    if(!attrs.name){
        return "I NEED THE NAME";
    }
};

Person.set({name: 'Samuel'});
console.log(Person.toJSON());

// when validate is set to true here
// the name will not be unset
// because the validation rule checks for the name
Person.unset('name', {validate : true});

// This will delete the name attribute because there is no validate to check for deletion
// Since the name is now delete
// when running the isValid() will return false
Person.unset('name');


// if the validation of an Object is false
// it will not be saved into the server when running the .save()

console.log(Person.toJSON());

console.log(Person.isValid());

