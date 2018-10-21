let router = require('aurora-router');
let http = require('http');
require('./router');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {
        router.handle(req, res);
    }
}).listen(8080);