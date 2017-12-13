const myPowers = require('./common/util/math/myPowers');

var express = require('express');
//var apiV2HelpRouter = require('./routes/v2/help');

var app = express();

app.set('views', './views');

app.engine('html', require('ejs').renderFile);

// routes
// set root route
app.get('/', function(req, res) {

    var data2template = {
        head: { title: 'Exam Section 2 Root Directory' },
        name: 'Sabrina',
        lastname: 'Antoni'
    };
    res.render('./pages/home.ejs', data2template);
});

app.get('/square', function(req, res) {
    var squareTemplate = {
        head: { title: 'Square Page' },
        input: 2,
        result: myPowers.getSquared(2)
    };
    res.render('pages/square.ejs', squareTemplate);
});

app.get('/square/:svalue', function(req, res) {

    var squareTemplate = {
        head: { title: 'Square Page' },
        input: req.params.svalue,
        result: myPowers.getSquared(req.params.svalue)
    };
    res.render('pages/square.ejs', squareTemplate);
});

app.get('/cube', function(req, res) {

    var cubeTemplate = {
        head: { title: 'Cube Page' },
        input: 3,
        result: myPowers.getCubed(3)
    };
    res.render('pages/cube.ejs', cubeTemplate);
});

app.get('/cube/:cvalue', function(req, res) {

    var cubeTemplate = {
        head: { title: 'Cube Page' },
        input: req.params.cvalue,
        result: myPowers.getCubed(req.params.cvalue)
    };
    res.render('pages/cube.ejs', cubeTemplate);
});

app.get('/about', function(req, res) {
    res.status(200).render('pages/about.html');
});

app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

// start express server
var server = app.listen(8015, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});