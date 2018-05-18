// The sync function may be overridden globally as Backbone.sync, or at a finergrained
// level, by adding a sync function to a Backbone collection or to an
// individual model.
// Since all persistence is handled by the Backbone.sync function, an alternative
// persistence layer can be used by simply overriding Backbone.sync with a function
// that has the same signature Backbone.sync = function(method, model, options) {};

// If we wanted to replace the standard sync implementation with one that simply
// logged the calls to sync

let id_counter = 1;
Backbone.sync = function(method, model) {
    console.log("I've been passed " + method + " with " + JSON.stringify(model));
    if(method === 'create'){ model.set('id', id_counter++); }
};

//Note that we assign a unique id to any created models.

//Implementing a new sync method can use the following pattern
Backbone.sync = function(method, model, options) {
    function success(result) {
        // Handle successful results from MyAPI
        if (options.success) {
            options.success(result);
        }
    }
    function error(result) {
        // Handle error results from MyAPI
        if (options.error) {
            options.error(result);
        }
    }
    options || (options = {});
    switch (method) {
        case 'create':
            return MyAPI.create(model, success, error);
        case 'update':
            return MyAPI.update(model, success, error);
        case 'patch':
            return MyAPI.patch(model, success, error);
        case 'delete':
            return MyAPI.destroy(model, success, error);
        case 'read':
            if (model.cid) {
                return MyAPI.find(model, success, error);
            } else {
                return MyAPI.findAll(model, success, error);
            }
    }
};