var ZombieView = Marionette.ItemView.extend({
    template: '#my-view-template',

    initialize: function() {
        // bind the model change to re-render this view
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        // This alert is going to demonstrate a problem
        alert('We`re rendering the view');
    }
});

/*Marionette’s views also provide a close event, in which the event bindings that
are set up with the listenTo are automatically removed. This means we no
longer need to define a close method directly, and when we use the listenTo
method, we know that our events will be removed and our views will not turn
into zombies.*/

var Joe = new Person({
    firstName: 'Joe',
    lastName: 'Bob',
    email: 'joebob@example.com'
});

var myView = new MyView({
    model: Joe
});

myView.render();

// show the view in the DOM
$('#content').html(myView.el);

/*This, again, is boilerplate code. We shouldn’t have to manually call render and
manually select the DOM elements to show the view. Furthermore, this code
doesn’t lend itself to closing any previous view instance that might be attached
to the DOM element we want to populate. And we’ve seen the danger of zombie
views already.*/

/*To solve these problems, Marionette provides a Region object - an object that
manages the lifecycle of individual views, displayed in a particular DOM element.*/

// create a region instance, telling it which DOM element to manage
var myRegion = new Marionette.Region({
    el: '#content'
});

// show a view in the region
var view1 = new MyView({ /* ... */ });
myRegion.show(view1);

// somewhere else in the code,
// show a different view
var view2 = new MyView({ /* ... */ });
myRegion.show(view2);

/*There are several things to note, here. First, we’re telling the region what DOM
element to manage by specifying an el in the region instance. Second, we’re no
longer calling the render method on our views. And lastly, we’re not calling
close on our view, either, though this is getting called for us.*/

/*When we use a region to manage the lifecycle of our views, and display the
views in the DOM, the region itself handles these concerns. By passing a view
instance into the show method of the region, it will call the render method on
the view for us. It will then take the resulting el of the view and populate the
DOM element.*/

/*The next time we call the show method of the region, the region remembers
that it is currently displaying a view. The region calls the close method on the
view, removes it from the DOM, and then proceeds to run the render & display
code for the new view that was passed in.*/