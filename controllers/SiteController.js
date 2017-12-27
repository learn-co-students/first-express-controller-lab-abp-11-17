/*commented out
const SiteController = {
  name: "Jence Kade",
  greeting: "Welcome to EJS!",
  jobs: ["Barista", "Model", "Pole Dancer"],
  currentJob: "POLE AERIALIST at Spearmint Rhino"
}; end of comment
*/
const SiteController = {};

SiteController.Index = function(res, resp) {
  resp.render("site/index", {
    greeting: "Welcome to EJS!",
    name: "Jence Kade",
    currentJob: "POLE AERIALIST at Spearmint Rhino"
  });
}

SiteController.About = function(res, resp) {
  resp.render('site/about', {
    name: "Jence Kade"
  });
}

SiteController.Contact = function(res, resp) {
  resp.render('site/contact', {
    name: "Jence Kade",
    jobs: ["Barista", "Model", "Pole Dancer"]
  });
}

module.exports = SiteController;
