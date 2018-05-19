// Specifying the {patch: true} option to Model.save() will cause it to use
// HTTP PATCH to send only the changed attributes (i.e. partial updates) to the
// server instead of the entire model; i.e. model.save(attrs, {patch: true}):

// Save partial using PATCH
let model = Backbone.Model.extend({});

model.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
model.save();

model.save({b: 2, d: 4}, {patch: true});
console.log(this.syncArgs.method);
// 'patch'

// Similarly, passing the {reset: true} option to Collection.fetch() will result
// in the collection being updated using reset() rather than set().