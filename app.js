var express = require('express')
var controller = require('./controllers/SiteController.js')
var app = express()

app.get('/', controller.Index)

app.get('/about', controller.About)

app.get('/contact', controller.Contact)
 
module.exports = app










