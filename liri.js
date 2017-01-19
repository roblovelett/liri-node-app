//At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
var fs = require("fs"); //file system
var Twitter = require('twitter'); //twitter api
var spotify = require('spotify'); //spotify api
var keys = require('./keys.js'); //keys.twitter

var action = process.argv[2];
var value = process.argv[3];
console.log(process.argv[2]);
console.log(action);
// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
switch (action) {
    case "my-tweets":
        my_tweets(keys);
        break;

    case "spotify-this-song":
        spotify_song(value);
        break;

    case "movie-this":
        movie(value) //
        break;

    case "do-what-it-says":
        do_what(value) //
        break;
};

function do_what(val) {
/*
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.
*/

};

function movie(val) {
/*
This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!
*/

};

function spotify_song(val) {
/*
    This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
if no song is provided then your program will default to

"The Sign" by Ace of Base
*/

    spotify.search({ type: 'track', query: val }, function spotify_this_song(err, data) {
        var first_result = data.tracks.items;
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    };
 
    // Do something with 'data' 
    console.log(first_result);
});
};

function my_tweets(keys) {
    var client = new Twitter({
        consumer_key: keys.twitter.consumer_key,
        consumer_secret: keys.twitter.consumer_secret,
        access_token_key: keys.twitter.access_token_key,
        access_token_secret: keys.twitter.access_token_secret
    });

    //This will show your last 20 tweets and when they were created at in your terminal/bash window.
    client.get('statuses/user_timeline', {
        screen_name: "roblovelett",
        count: 20,
        include_rts: 1
    }, function tweets(error, tweets, response) {
        if (error) throw error;
        for (i=0; i < tweets.length; i++) {
            var tweet = tweets[i];
            console.log(tweet.created_at + ": " + tweet.text + "\n");
        };
        //console.log(tweet); // Tweet body. 
        //console.log(response); // Raw response object. 
    });
};
/*
BONUS

In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.

Make sure you append each command you run to the log.txt file.

Do not overwrite your file each time you run a command.*/