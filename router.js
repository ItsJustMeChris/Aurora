    let router = require('aurora-router');

    router.route('/', 'get', (req, res) => {
        res.write("From index route");
        res.end();
    });

    router.route('/user/:id', 'get', (req, res) => {
        res.write("From user/:id");
        res.end();
    });

    router.route('/user/panel', 'get', (req, res) => {
        res.write("user/panel");
        res.end();
    });

    router.route('/user/update', 'post', 'User#update')