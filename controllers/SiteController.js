const SiteController = {};

SiteController.Index = function(req, resp){
  resp.render('site/index',{welcomeMessage: "Welcome to the Home Page"})
}


module.exports = SiteController;
