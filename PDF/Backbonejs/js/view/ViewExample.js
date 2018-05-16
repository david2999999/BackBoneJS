let TodosView = Backbone.View.extend({
    tagName: 'ul',
    className: 'container',
    id: 'todos'
});

var todosView = new TodosView();
console.log(todosView.el);