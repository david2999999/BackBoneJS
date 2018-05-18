let ToDoCounter = {
    counterA: 0,
    counterB: 0
};

_.extend(ToDoCounter, Backbone.Events);

let incrA = function () {
    ToDoCounter.counterA++;

    ToDoCounter.trigger('event');
};

let incrB = function () {
    ToDoCounter.counterB++;
};

ToDoCounter.once('event', incrA);
ToDoCounter.once('event', incrB);

ToDoCounter.trigger('event');

console.log(ToDoCounter.counterA === 1); // true
console.log(ToDoCounter.counterB === 1); // true