var http = require('http');

var server = http.createServer(function (req, res) {
    res.end('Hello World!');
});

server.listen(3000, function(err) {
    if (err) {
        console.error(err.message);
        return consol.log('Server Failed to start ... ');
    } 
    console.log('Server Start successfully :)');
});