// Also note that listening to a reset event, the list of previous models is available
// in options.previousModels

let todo = new Backbone.Model({
    defaults: {
        title: 'example',
        id: 2
    }
});

let todos = new Backbone.Collection([todo])
                .on('reset', function (todos, options) {
                    console.log(options.previousModels);
                    console.log([todo]);
                    console.log(options.previousModels[0] === todo); // true
                });

todos.reset();