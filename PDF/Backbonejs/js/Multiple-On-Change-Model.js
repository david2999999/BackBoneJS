let Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

let myTodo = new Todo();

myTodo.set({
    title: 'Buy some cookies', completed: true
});

myTodo.on({
    'change:title': titleChanged,
    'change:completed' : stateChanged
});

function titleChanged() {
    console.log('Title was changed');
}

function stateChanged() {
    console.log('State was changed');
}

myTodo.set({
    title: 'Get the Groceries'
});