var express = require('express')
var app = express()

// Load Controllers
const SiteController = requires(./controllers/SiteController.js)

// Routes
app.get("/", SiteController.Index)

module.exports = app
