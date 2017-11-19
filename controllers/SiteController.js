const SiteController = {};

SiteController.Index = function(req, resp){
  resp.render("Index",{welcomeMessage: "Welcome to the home page"})
}


module.exports = SiteController;
