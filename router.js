let floof = require('floof');

floof.route('/', 'get', (req, res) => {
    res.write("From Floof Route");
    res.end();
});

floof.route('/user/:id', 'get', (req, res) => {
    res.write("From Floof Route With Params: ");
    res.end();
});

floof.route('/user/panel', 'get', (req, res) => {
    res.write("user/panel");
    res.end();
});
