http.createServer(function(rq,res){
    res.writeHead(200,('Conect-type':'text/html')

    res.end(msg);
}).listen(3000);
console.log("server is started http://127.0.0.1:3000")