var express = require('express')
var app = express()

// Load Controllers
const SiteController = require("./controllers/SiteController.js") //require not requires and need ""

// Routes
app.get("/", SiteController.Index)

module.exports = app
