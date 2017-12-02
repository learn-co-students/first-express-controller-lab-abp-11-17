var express = require('express')
var app = express()
var SiteController = require('./controllers/SiteController')

app.get('/',SiteController.Index
    // function(req,resp){
    //     resp.render('index')
)
app.get('/about',SiteController.About)
app.get('/contact',SiteController.Contact)

module.exports = app
