const router = (app) => {
    app.get(['/', '/index.html'], (req, res) => {
        res.render('index.html');
    });
    app.get('/about.html', (req, res) => {
        res.render('about.html');
    });
}

exports.router = router;