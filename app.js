let floof = require('aurora-router');
let http = require('http');
let router = require('./router');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {
        floof.router(req, res);
    }
}).listen(8080); 