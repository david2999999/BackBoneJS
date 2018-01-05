var Song = Backbone.Model.extend();         // creates a model song

var Songs = Backbone.Collection.extend({    // creates a collection of models
   model: Song                              // Using the Model songs inside the collection
});

var songs = new Songs([                     // initialize values inside the collection with 3 songs
    new Song({title: "Song 1"}),
    new Song({title: "Song 2"}),
    new Song({title: "Song 3"})
]);

songs.add(new Song({title: "Song 4"}));     // adds in a separate song 4

var firstSong = songs.at(0);                // creates a firstSong that references to the value at collection[0]

var songWithIdC1 = songs.get("C1");         // gets the song with the ID c1
                                            // Each model has 2 separate IDs. One assign by server and one by BackboneJS
songs.remove(firstSong);                    // Removing the first Song from the array of collections