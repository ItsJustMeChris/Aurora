let router = require('aurora-router');

router.route('/', 'get', (req, res) => {
    res.write("From Floof Route");
    res.end();
});

router.route('/user/:id', 'get', (req, res) => {
    res.write("From Floof Route With Params: ");
    res.end();
});

router.route('/user/panel', 'get', (req, res) => {
    res.write("user/panel");
    res.end();
});
