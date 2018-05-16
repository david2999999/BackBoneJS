var OnChangeSet = new Backbone.Model();

OnChangeSet.on('change', function () {
    console.log("Name Changed");
});

OnChangeSet.set('name', 'My name is Tim');

OnChangeSet.set({'name': 'My name is Dav'}, {silent: true});
console.log(OnChangeSet.get('name'));