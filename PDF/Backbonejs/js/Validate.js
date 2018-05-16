var Todo = Backbone.Model.extend({
    defaults: {
        completed: false
    },

    validate: function (attrs) {
        if(attrs.title === undefined){
            return 'NEED A TITLE FOR THE TODO';
        }
    },

    initialize: function () {
        console.log("Todo Item has been initialized");
        this.on('invalid', function (model, error) {
           console.log(error);
        });
    }
});


var myTodo = new Todo();

// since the new instance is not valid
// the object will not be updated with the set method
// completed is still set to false
myTodo.set('completed', true, {validate: true});
console.log('completed: ' + myTodo.get('completed'));


var emptyTodo = new Todo(null, {validate: true});
console.log(emptyTodo.validationError);












