require("dotenv").config();
var keys = require("./key.js");
//var spotify = new spotify(keys.spotify);
var music = require("spotify");
var Spotify = require("node-spotify-api");
var fs = require("fs");
 

var axios = require("axios");
var val1 = process.argv[2];
var val2 = process.argv[3];
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
  var spotify = new Spotify({
    id: "26dda30c2d6943f4928fb61109780820",
    secret: "c259a1d1dae746fea43531b7100c34c3"
  })
   
  
  
  spotify.search( "https://api.spotify.com/v1/search?query="+val2+"&type=track&offset=0&limit=1").then(
    function(response){
      console.log(response.data);
      console.log("Artist(s): "  );
      console.log("Name of Song: " );
      console.log("Preview Link of Song: "  );
      console.log("Album: "  );
    }
   
  )

  
}
else if(val1 === "do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(error, data) {

    
    if (error) {
      return console.log(error);
    }
  
    
    console.log(data);
  
    
    var dataArr = data.split(",");
  
    
    console.log(dataArr[1]);
    var spotify = new Spotify({
      id: "26dda30c2d6943f4928fb61109780820",
      secret: "c259a1d1dae746fea43531b7100c34c3"
    })
     
    
    
    spotify.search( "https://api.spotify.com/v1/search?query="+dataArr[1]+"&type=track&offset=0&limit=1").then(
      function(response){
        console.log(response.data);
        console.log("Artist(s): "  );
        console.log("Name of Song: " );
        console.log("Preview Link of Song: "  );
        console.log("Album: "  );
      }
     
    )

  
  });



}