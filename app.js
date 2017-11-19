var express = require('express')
var app = express()

// Load Controllers
app.get('/',function(req,resp){
  const welcomeText="welcome to express module";
  resp.render("index",{
    "welcomeText":welcomeText,
    name:"balesabu",
    colors:"green"

  });
})
// Routes


module.exports = app
