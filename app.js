var express = require('express')
var app = express()

// Load Controllers

app.get("/", function(req, resp){
  resp.send(`Hello, World!`)
})
// Routes


module.exports = app
