// Load http Package
var http = require("http");

// Create server code
http.createServer(function(req,res){

    // print Message on browser
    res.end("<h1> Welcome to node Js </h1>");
}).listen(3000);

console.log("Server is started http://127.0.0.1:3000");