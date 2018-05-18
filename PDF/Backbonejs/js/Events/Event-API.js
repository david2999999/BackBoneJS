// <div id="todo">
//     <input type='checkbox' />
// </div>

let View = Backbone.View.extend({
    el: '#todo',

    // bind to DOM event using events property
    events: {
        'click [type="checkbox"]': 'clicked',
    },
    initialize: function () {
        // bind to DOM event using jQuery
        this.$el.click(this.jqueryClicked);

        // bind to API event
        this.on('apiEvent', this.callback);
    },

    // 'this' is view
    clicked: function(event) {
        console.log("events handler for " + this.el.outerHTML);
        this.trigger('apiEvent', event.type);
    },

    // 'this' is handling DOM element
    jqueryClicked: function(event) {
        console.log("jQuery handler for " + this.outerHTML);
    },
    
    callback: function(eventType) {
        console.log("event type was " + eventType);
    }
});
let view = new View();