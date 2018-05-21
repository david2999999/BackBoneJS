var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    /*Note that in the initialize function, we accept an array of data that we pass
    to the app.Library constructor. We’ll use this to populate our collection with
    some sample data so that we can see everything is working correctly.*/
    initialize: function (initialBooks) {
        this.collection = new app.Library();
        this.collection.fetch({reset: true});
        this.render();
        this.listenTo( this.collection, 'add', this.renderBook );

        /*We have also added a listener on the reset event. We need to do this since the
        models are fetched asynchronously after the page is rendered. When the fetch
        completes, Backbone fires the reset event, as requested by the reset: true*/
        this.listenTo( this.collection, 'reset', this.render );
    },

    render: function() {
        this.collection.each(function (item) {
            this.renderBook(item);
        }, this);
    },

    renderBook: function (item) {
        var bookView = new app.BookView({
            model: item
        });

        this.$el.append(bookView.render().el);
    },

    events: {
        'click #add' : 'addBook'
    },

    addBook: function ( e ) {
        /*Backbone passes an event object as a parameter to the event-handling function.
        This is useful for us in this case since we don’t want the form to actually submit
        and reload the page. Adding a call to preventDefault on the event in the
        addBook function takes care of this for us.*/
        e.preventDefault();

        var formData = {};

        /*We select all the input elements of the form that have a value and iterate over
        them using jQuery’s each. Since we used the same names for ids in our form as
        the keys on our Book model, we can simply store them directly in the formData
        object. We then create a new Book from the data and add it to the collection.
        We skip fields without a value so that the defaults will be applied.*/
        $( '#addBook div' ).children('input').each(function (i , el) {
            if( $( el ).val() != '' )
            {
                /*First, we’re checking if
                the current element is the keywords input field, in which case we’re splitting the
                string on each space and creating an array of keyword objects.*/
                if( el.id === 'keywords' ) {
                    formData[ el.id ] = [];
                    _.each( $( el ).val().split( ' ' ), function( keyword ) {
                        formData[ el.id ].push({ 'keyword': keyword });
                    });

                /*which case we’re calling datePicker(“getDate”) which returns a Date object.
                We then use the getTime function on that to get the time in milliseconds.*/
                } else if( el.id === 'releaseDate' ) {
                    formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
                } else {
                    formData[ el.id ] = $( el ).val();
                }
            }
            // Clear input field value
            $( el ).val('');
        });


        // this.collection.add(new app.Book(formData));
        this.collection.create( formData );
    }
});























