var button1 = $('<button></button>');
var button2 = $('<button></button>');

var View = Backbone.View.extend({
    events: {
        click: function (e) {
            console.log(view.el === e.target);
        }
    }
});

// creating a new instance of the view
// and set the view onto button1
var view = new View({el : button1});

// change the view to button 2
view.setElement(button2);

button1.trigger('click'); // nothing happens
button2.trigger('click'); // consoles.log true