var express = require ("express");
var mongoose = require ("mongoose");
var bodyParser = require ("bodyParser");
var methodOverride = require ("methodOverride");
var _ = require ("lodash");

// Creating application
var app = express();

// Add Middleware necessary for the REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method-Override"));
