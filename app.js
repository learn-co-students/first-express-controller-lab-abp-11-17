'use strict' ;

var express = require('express')
var app = express()
const SiteController = require('./controllers/SiteController.js')

app.get('/', Sitecontroller.Index)

module.exports = app

app.get('/about', Sitecontroller.About)

app.get('/contact', Sitecontroller.Contact)

module.exports = app
