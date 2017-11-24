const SiteController = {};

SiteController.Index = function(req, resp){
  resp.render("site/index")
} // Index Action

SiteController.About = function(req, resp){
  resp.render("site/about")

} // About Action

SiteController.Contact = function(req, resp){
  resp.render("site/contact")

} // Contact Action

module.exports = SiteController;
