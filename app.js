var express = require('express')
var app = express()

const SiteController = require("./controllers/SiteController")

app.get("/", SiteController.Index)
app.get("/about", SiteController.About)
app.get("/contact", SiteController.Contact)


module.exports = app
