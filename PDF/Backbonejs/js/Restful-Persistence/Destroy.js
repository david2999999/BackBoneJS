// A model can be removed from the containing collection and the server by calling
// its destroy() method. Unlike Collection.remove() which only removes a
// model from a collection, Model.destroy() will also send an HTTP DELETE
// to the collection’s URL.

let Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

let TodosCollection = Backbone.Collection.extend({
    model: Todo,
    url: '/todos'
});
let todos = new TodosCollection();
todos.fetch();

let todo2 = todos.get(2);
todo2.destroy(); // sends HTTP DELETE to /todos/2 and removes from collection

// Calling destroy on a Model will return false if the model isNew:
let todo = new Backbone.Model();
console.log(todo.destroy());
// false