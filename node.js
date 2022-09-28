
const http = require("http"); 
const url =require('url');
const fileServer=require('./fileServer.js');
const path = require('path');
const utils = require('./utils.js');
const urlPrefix= "http://204.48.16.1/";

console.log(path);



function handle_incoming_request(req, res) {
    console.log(req.url);
    // get the path of the file to served
    const path = url.parse(req.url).pathname;
    // get a query (true makes sure the query string is parsed into an object)
    const queryObj = url.parse(req.url,"true").query;
	console.log("path is:");
	console.log(path);

    switch (path) {
        case "/":
            fileServer.serve_static_file("./index.html",res);
            
            break;
        
    }    
        
     
 }






// const Server=http.createServer(function (req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('./index.html', function(error, data){
//         if (error){
//             res.writeHead(404)
//             res.write("Eror")


//         }else{
//             res.write(data)
//         }
//         res.end()
//     })

// })
const Server = http.createServer(handle_incoming_request);

Server.listen(urlPrefix, function(){console.log("port 80")});