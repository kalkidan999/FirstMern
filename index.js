const fs = require("fs")
const movie = fs.readFileSync("movie.txt", {encoding: "utf-8"});
console.log(movie);