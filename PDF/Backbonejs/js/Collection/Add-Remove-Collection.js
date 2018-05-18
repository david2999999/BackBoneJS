let Todo = Backbone.Model.extend({
   defaults: {
       title: '',
       completed: false
   }
});

let TodosCollection = Backbone.Collection.extend({
   model: Todo
});

let a = new Todo({title: 'Go to Jamaica'}),
    b = new Todo({title: 'Go to China'}),
    c = new Todo({title: 'Go to Japan'});

let todos = new TodosCollection([a,b]);
console.log("Collection size: " + todos.length);

todos.add(c);
console.log("Collection size: " + todos.length);

todos.remove([a,b]);
console.log("Collection size: " + todos.length);

todos.remove(c);
console.log("Collection size: " + todos.length);

