require("dotenv").config();
var keys = require("./key.js");
//var spotify = new spotify(keys.spotify);
var music = require("spotify");
var Spotify = require("node-spotify-api");
var fs = require("fs");
 

var axios = require("axios");
var val1 = process.argv[2];
var val2 = process.argv.slice(3).join("");
var http = require("http");



if(val1 === "movie-this"){
  
  axios.get("http://www.omdbapi.com/?t=" + val2 + "&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    var answer = response.data;
    
    console.log("Title: " + answer.Title);
    console.log("Year Released: " + answer.Year);
    console.log("IMBD Rating: " + answer.Rated);
    console.log("Country Produced: " + answer.Country);
    console.log("Language: " + answer.Language);
    console.log("Plot: " + answer.Plot);
    console.log("Actors: " + answer.Actors);
  })
      
}else if(val1 === "concert-this"){
  axios.get("https://rest.bandsintown.com/artists/" + val2 + "/events?app_id=codingbootcamp").then(
  function(response){
    var answer = response.data;
      
        console.log("Name of Venue: " + answer[0].venue.name );
        console.log("Venue Location: " + answer[0].venue.city);
        console.log("Date of Event: " + answer[0].datetime);
       
    
  })

}
else if(val1 === "spotify-this-song"){
  var spot = require("./key")
  var spotify = new Spotify({id:process.env.SPOTIFY_ID, secret: process.env.SPOTIFY_SECRET})
  var songName = process.argv.slice(3).join("-");

  spotify.search({type: "track", query: songName || "single ladies", limit: 1}, function(err,data){
    //console.log(songName)
    //console.log(data.tracks.items[0].album);
    //console.log(data.tracks.items[0].artists.external_urls)
    console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name );
    console.log("Name of Song: " + data.tracks.items[0].name );
    console.log("Preview Link of Song: " + data.tracks.items[0].href );
    console.log("Album: " + data.tracks.items[0].album.name );
  
  })
  

  
}
else if(val1 === "do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(error, data) {

    
    if (error) {
      return console.log(error);
    }
  
    
    console.log(data);
  
    
    var dataArr = data.split(",");
  
    
    console.log(dataArr[1]);
    var spot = require("./key")
    var spotify = new Spotify({id:process.env.SPOTIFY_ID, secret: process.env.SPOTIFY_SECRET})
    var songName = process.argv.slice(3).join("-");

    spotify.search({type: "track", query: dataArr[1] , limit: 1}, function(err,data){
      console.log(songName)
      
      console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name );
      console.log("Name of Song: " + data.tracks.items[0].name );
      console.log("Preview Link of Song: " + data.tracks.items[0].href );
      console.log("Album: " + data.tracks.items[0].album.name );
  
    })
  
      
     
    
  
  
  }



  )}