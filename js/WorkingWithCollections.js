var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs();

songs.add(new Song({ title: "Song 1", genre: "Jazz", downloads: 110}), {at: 0});  // add in a song at the index 0

songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90}));           // Push a song into the collection
songs.push(new Song({ title: "Song 3", genre: "Jazz", downloads: 200}));

var jazzSongs = songs.where({ genre: "Jazz"});                      // find all the song with genre jazz

var firstJazzSong = songs.findWhere({ genre: "Jazz"});              // find the first song with genre jazz

console.log("Jazz Songs", jazzSongs);
console.log("First Jazz Song", firstJazzSong);

var filterSongs = songs.where({genre: "Jazz", title: "Song 2"});    // find out all songs with genre jazz and title song2
console.log("Filter Songs", filterSongs);

var topDownloads = songs.filter(function (song) {                   // filter out all song with downloads more than 100
    return song.get("downloads") > 100;
});

console.log("Top Downloads", topDownloads);

songs.each(function (song) {                                        // iterate through each item in the collection
    console.log(song);
});