var List = Backbone.Model.extend({

    defaults:{
        title: "List here",
        completed : true
    }

});

var ListView = Backbone.View.extend({
    template: _.template($("#item-template").html()),
    
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});


var list = new List();
console.log(list.toJSON());
var listView = new ListView({model: list});
$("#todo").append(listView.render().$el);