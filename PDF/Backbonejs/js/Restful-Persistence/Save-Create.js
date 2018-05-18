// While Backbone can retrieve an entire collection of models from the server at
// once, updates to models are performed individually using the model’s save()
// method. When save() is called on a model that was fetched from the server,
// it constructs a URL by appending the model’s id to the collection’s URL and
// sends an HTTP PUT to the server. If the model is a new instance that was
// created in the browser (i.e. it doesn’t have an id) then an HTTP POST is sent
// to the collection’s URL. Collections.create() can be used to create a new
// model, add it to the collection, and send it to the server in a single method call
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
todo2.set('title', 'go fishing');
todo2.save(); // sends HTTP PUT to /todos/2
todos.create({title: 'Try out code samples'}); // sends HTTP POST to /todos and adds to collection
