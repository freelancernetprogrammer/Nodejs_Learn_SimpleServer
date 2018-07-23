//it is an internal nodejs libraries
var http = require('http');

//every access to this server result in receiving 'Hello World' message
var server = http.createServer(function (req, res) {
    res.end('Hello World!');
});

//server is listening on port 3000 
//if stablishing of server faild then error message will be logged and app will be closed
//else a successfull message will be logged and server will wait for requests
server.listen(3000, function(err) {
    if (err) {
        console.error(err.message);
        return consol.log('Server Failed to start ... ');
    } 
    console.log('Server Start successfully :)');
});