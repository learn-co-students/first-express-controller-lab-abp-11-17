var express = require('express')
var app = express()
var SiteController = require('./controllers/SiteController.js')
// Require controller modules

app.get('/', SiteController.Index(req, res))
