var express = require('express')
var app = express()
const SiteController = require('./controllers/SiteController.js')
// Load Controllers
const greeting = SiteController.greeting;
const name = SiteController.name;
const jobs = SiteController.jobs;
const currentJob = SiteController.currentJob;
// Routes
app.get('/', function(req, resp) {
  // render `index.ejs`
  resp.render("./site/index", {
    greeting: greeting,
    name: name,
    currentJob: currentJob
  });
});

app.get('/about', function(req, resp) {
  // render `about.ejs`
  resp.render('./site/about', {
    name: name
  });
});

app.get('/contact', function(req, resp) {
  // render `contact.ejs`
  resp.render('./site/contact', {
    name: name,
    jobs: jobs
  });
});


module.exports = app
