// Server.js
//
//  modules ============
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var config = require('config');
var exphbs  = require('express-handlebars');
// configuration =========

// config files
var db = require('./config/db');

var host = config.get('server.host');
var port = process.env.PORT || config.get('server.port');;

// connect mongoDB
var mongo_url = config.get('mongodb.url');
//mongoose.connect(mongo_url);

app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

//Set views
app.set('views', __dirname + '/public/views');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// routes ==================================================
//require('./app/routes')(app); // configure our routes
var router = express.Router();
require('./app/routes')(router); // configure our routes
app.use('/api', router);

// start app ===============================================
// startup our app at http://localhost:5000
app.listen(port, host, function(){
    console.log('App run on ' + host + ":" + port);
});

// expose app           
exports = module.exports = app; 
