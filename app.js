
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');''
var path = require('path');
var handlebars = require('express3-handlebars');


var login = require('./routes/login');
var index = require('./routes/index');
var schedule = require('./routes/schedule');
var messages = require('./routes/messages');
var food = require('./routes/food');
var settings = require('./routes/settings');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

// Example route
// var user = require('./routes/user');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));




// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  mongoose.connect('mongodb://localhost:27017/reminder')
}

mongoose.model('users', {username: String});
mongoose.model('posts', {content: String})


app.get('/data', function(req, res) {
	mongoose.model('users').find(function(err, users) {
		res.send(users)
	});
});

app.get('/', login.view);
app.get('/index', index.view);
app.get('/schedule', schedule.view);
app.get('/messages', messages.view);
app.get('/food', food.view);
app.get('/settings', settings.view);
app.get('/login', login.view);


app.post('/check-username',function(req,res) {
	var username = req.body.username;
	var destination = req.body.destination || "private-page-1";
	if (destination.search(/^[-A-Za-z0-9]+$/) == -1) {
		res.redirect(303, "/authentication-failure.html");
		return;
	}
	if (username.search(/^[A-Za-z0-9]+$/) == -1) {
		res.redirect(303, "/username-not-found.html");
		return;
	}
	User.findOne({username: username}).exec(function(err, user) {
		if (err) throw new Error(err);
		if (!user) {
			res.redirect(303, "/username-not-found.html");
			return;
		}
		var entropyHex = pjclBitArray2Hex(pjclRBGGen(rbgStateObject,rbgSecurityStrength,rbgSecurityStrength));
		var challengeHex = pjclBitArray2Hex(pjclRBGGen(rbgStateObject,rbgSecurityStrength,rbgSecurityStrength));
		user.loginChallenge = challengeHex;
		user.loginTimeStamp = new Date().getTime();
		user.save(function(err) {
			if (err) throw new Error(err);
			res.render("login-redir.handlebars", {
				entropyHex: entropyHex, 
				challengeHex: challengeHex,
				username: username,
				destination: destination
			});
		});
	});
});


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
