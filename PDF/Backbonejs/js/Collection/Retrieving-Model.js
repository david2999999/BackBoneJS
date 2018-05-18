let myTodo = new Todo({title: 'Read the whole book', id : 2});

// pass array of models on collection instantiation
let todos = new TodoCollection([myTodo]);

let todo2 = todos.get(2);

// Models, as objects, are passed by reference
console.log(todo2 === myTodo); // true

// extends the previous example
var todoCid = todos.get(todo2.cid);

// models are passed by reference
console.log(todoCid === myTodo); // true