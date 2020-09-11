var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var apiRouter = require('./routes/api');
var app = express();
 
// app.use(express.static('public'));
app.use(logger('dev'));
app.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'very secret'
})); 

app.use('/api', apiRouter);
app.use(function(req, res, next){
  res.status(404).send(' ');
});


module.exports = app;
