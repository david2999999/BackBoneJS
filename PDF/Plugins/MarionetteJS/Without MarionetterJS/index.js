var MyView = Backbone.View.extend({
    template: $('#my-view-template').html(),
    render: function() {
        // compile the Underscore.js template
        var compiledTemplate = _.template(this.template);

        // render the template with the model data
        var data = _.clone(this.model.attributes);
        var html = compiledTemplate(data);

        // populate the view with the rendered html
        this.$el.html(html);
    }
});

var Person = Backbone.Model.extend({
    defaults: {
        "firstName": "Jeremy",
        "lastName": "Ashkenas",
        "email": "jeremy@example.com"
    }
});

/*Once this is in place, you need to create an instance of your view and pass your
model into it. Then you can take the view’s el and append it to the DOM in
order to display the view.*/

var Derick = new Person({
    firstName: 'Derick',
    lastName: 'Bailey',
    email: 'derickbailey@example.com'
});

var myView = new MyView({
    model: Derick
});

myView.setElement("#content");
myView.render();