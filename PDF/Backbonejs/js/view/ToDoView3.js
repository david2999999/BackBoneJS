var List = Backbone.Model.extend({
    default: {
        items: "empty"
    }
});

var Lists = Backbone.Collection.extend({
    model: List
});

var lists = new Lists([
    new List({id: 1, items: "1"}),
    new List({items: "2"}),
    new List({items: "3"})
]);


var ListView = Backbone.View.extend({
    model: Lists,

    render: function(){
            console.log(this.model.toJSON());
           var items = this.model.get(1).get("items"); // get a model from collection using id
           console.log(items);
    }

});

var listView = new ListView({model: lists});
listView.render();