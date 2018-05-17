//sortBy(): sort a collection on a specific attribute

// sort collection
let sortedByAlphabet = todos.sortBy(function (todo) {
    return todo.get("title").toLowerCase();
});
console.log("- Now sorted: ");

sortedByAlphabet.forEach(function(model){
    console.log(model.get('title'));
});

// Above logs:
// - Now sorted:
// go to Austria.
// go to Belgium.
// go to China.