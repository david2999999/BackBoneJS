let count = 1;

console.log(todos.map(function(model){
return count++ + ". " + model.get('title');
}));

// Above logs:
//1. go to Belgium.
//2. go to China.
//3. go to Austria.
