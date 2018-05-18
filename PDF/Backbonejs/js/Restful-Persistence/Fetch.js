// Collections.fetch() retrieves a set of models from the server in the form of
// a JSON array by sending an HTTP GET request to the URL specified by the
// collection’s url property (which may be a function). When this data is received,
// a set() will be executed to update the collection.

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
todos.fetch(); // sends HTTP GET to /todos