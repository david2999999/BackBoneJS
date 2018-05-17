// The set() method available for Collections can also be used for “smart” updating
// of sets of models. This method attempts to perform smart updating
// of a collection using a specified list of models. When a model in this list isn’t
// present in the collection, it is added. If it’s present, its attributes will be merged.
//     Models which are present in the collection but not in the list are removed.

let Beatle = Backbone.Model.extend({
    defaults: {
        job: 'musician'
    }
});

// Create models for each member of the Beatles
let john = new Beatle({ firstName: 'John', lastName: 'Lennon'});
let paul = new Beatle({ firstName: 'Paul', lastName: 'McCartney'});
let george = new Beatle({ firstName: 'George', lastName: 'Harrison'});
let ringo = new Beatle({ firstName: 'Ringo', lastName: 'Starr'});

// Create a collection using our models
let theBeatles = new Backbone.Collection([john, paul, george, ringo]);

// Create a separate model for Pete Best
let pete = new Beatle({ firstName: 'Pete', lastName: 'Best'});

// Update the collection
theBeatles.set([john, paul, george, pete]);


// Fires a `remove` event for 'Ringo', and an `add` event for 'Pete'.
// Updates any of John, Paul and Georges's attributes that may have
// changed over the years.