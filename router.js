let router = require('aurora-router');

router.route('/', 'get', (req, res) => {
    res.write("From index route");
    res.end();
});

router.route('/user/:genus.:species', 'get', (req, res) => {
    res.write("From user/:id");
    console.log(req.params);
    res.end();
});

//router.route('/user/panel', 'get', (req, res) => {
//    res.write("user/panel");
//    res.end();
//});

router.route('/user/panel', 'post', (req, res) => {
    res.write("Post Params!");
    res.end();
});

router.get('/user/panel', (req, res) => {
    res.write("user/panel");
    res.end();
});

router.get('/user-panel', (req, res) => {
    res.write("user-panel");
    res.end();
});


router.route('/user/update', 'post', 'User#update')