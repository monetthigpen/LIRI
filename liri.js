require("dotenv").config();
var keys = require("./key.js");
//var spotify = new spotify(keys.spotify);
var music = require("spotify");
var inquirer = require("inquirer");

var axios = require("axios");
var val1 = process.argv[2];
//var val2 = process.argv[3];


// We then run the request with axios module on a URL with a JSON
// axios.get("http://www.omdbapi.com/?t="+ val1.trim() +"&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );
inquirer
  .prompt([
   { type: "list",
    message: "What is your command?",
    choices: ["concert-this", "spotify-this-song", "movie-this","do-what-it-says"],
    name: "command"
    }
    
  ]).then(function(inquirerResponse){
    console.log("movie-this");
    if( inquirerResponse.command === "movie-this"){
      console.log("equal");
      
    }
  });
  
