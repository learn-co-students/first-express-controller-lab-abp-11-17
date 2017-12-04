var express = require('express')
var app = express()

//load controllers
const SiteController = require("./controllers/SiteController")

//routes
app.get('/', SiteController.Index)
app.get('/about', SiteController.About)
app.get('/contact', SiteController.Contact)

module.exports = app
