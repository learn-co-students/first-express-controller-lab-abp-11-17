var express = require('express')
var app = express()
const SiteController = require('./controllers/SiteController.js')



app.get('/', SiteController.Index);
app.get('/about', SiteController.About);
app.get('/contact', SiteController.Contact);

/* commented out
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
    name: name
  });
});

app.get('/contact', function(req, resp) {
  // render `contact.ejs`
  resp.render('./site/contact', {
    name: name,
    jobs: jobs
  });
}); end of comment
*/
module.exports = app
