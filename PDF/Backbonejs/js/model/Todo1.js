var Todo = Backbone.Model.extend({
   defaults: {
       title: '',
       completed: false
   },

    initialize: function () {
        console.log('This model has been initialized');
        this.on('change', function () {
            console.log('-Values for this model has changed');
        });
    }
});


var myTodo = new Todo();

myTodo.set('title', 'The listener is triggered whenever an attribute changes');
console.log(myTodo.get('title'));

myTodo.set('completed', true);
console.log(myTodo.get('completed'));

myTodo.set({
    title: 'This is a new title',
    completed : false
});

console.log(myTodo.toJSON());

