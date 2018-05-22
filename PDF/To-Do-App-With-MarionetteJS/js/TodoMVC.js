// require('marionette.module').shim(Marionette);

var TodoMVC = new Backbone.Marionette.Application({
    regions: {
        header: '#header',
        main: '#main',
        footer: '#footer'
    }
});

/*Regions are used to manage the content that’s displayed within specific elements,
and the addRegions method on the TodoMVC object is just a shortcut for
creating Region objects. We supply a jQuery selector for each region to manage
(e.g., #header, #main, and #footer) and then tell the region to show various
Backbone views within that region.*/
// TodoMVC.addRegions({
//     header: '#header',
//     main: '#main',
//     footer: '#footer'
// });

TodoMVC.on('start', function() {
    Backbone.history.start();
});

$(function() {
// Start the TodoMVC app (defined in js/TodoMVC.js)
    TodoMVC.start();
});