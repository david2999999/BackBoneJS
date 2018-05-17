// filter(): filter a collection

let Todo = Backbone.Model.extend();

let Todos = Backbone.Collection.extend({
    model: Todo,
    filterById: function(ids){
        return this.models.filter(
            function(model) {
                return _.contains(ids, model.id);
            })
    }
});

let todos = new Todos();

let todo1 = new Todo();
todo1.set({
    title: 'go to Belgium.', completed: false , id: 3
});

let todo2 = new Todo();
todo2.set({
    title: 'go to China.', completed: false, id: 2
});

let todo3 = new Todo();
todo3.set({
    title: 'go to Austria.', completed: true, id: 5
});
todos.add([todo1, todo2, todo3]);

let filteredTodo = todos.filterById([5]);

console.log(filteredTodo);