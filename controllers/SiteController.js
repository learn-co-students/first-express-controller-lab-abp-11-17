const SiteController = {}

  SiteController.Index = function(req,res){
  res.render('site/index')
}

SiteController.About = function(req,res){
  res.render('site/about')
}

SiteController.Contact = function(req,res){
  res.render('site/contact')
}


module.exports = SiteController;
