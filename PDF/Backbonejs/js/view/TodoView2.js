var button1 = $('<button></button>');
var button2 = $('<button></button>');

var View = Backbone.View.extend({
    events: {
        click: function (e) {
            console.log(view.el === e.target);
        }
    }
});


var view = new View({el : button1});

view.setElement(button2);

button1.trigger('click');
button2.trigger('click');