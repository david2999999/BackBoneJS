var TodoMVC = new Backbone.Marionette.Application();

TodoMVC.addRegions({
    header: '#header',
    main: '#main',
    footer: '#footer'
});

TodoMVC.on('start', function() {
    Backbone.history.start();
});