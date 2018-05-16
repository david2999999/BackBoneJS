let ItemView = Backbone.View.extend({
    events: {},

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    }
});

let ListView = Backbone.View.extend({
   
   render: function () {
       let items = this.model.get('items');

       _.each(items, function (item) {
           let itemView = new ItemView({model: item});

           this.$el.append(itemView.render().el);
       }, this);
   } 
});