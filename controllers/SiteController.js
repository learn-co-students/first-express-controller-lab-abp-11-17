const SiteController = {};

SiteController.Index = function(request, response){
  response.render('site/index');
}

SiteController.About = function(request, response){
  response.render('site/about');
}

SiteController.Contact = function(request, response){
  response.render('site/contact');
}


module.exports = SiteController;
