var express = require('express')

var SiteController = require('./controllers/SiteController')
var app = express()

app.get('/', SiteController.Index)
module.exports = app
app.get('/about', SiteController.About)
app.get('/contact', SiteController.Contact)



module.exports = app
