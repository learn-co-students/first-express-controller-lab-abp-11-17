
const SiteController = {}

SiteController.Index = function(req,resp){
   const welcomeText = "This is a home page"
  resp.render('site/index',{welcomeText:welcomeText});
}
SiteController.About = function(req,resp){
   const aboutText = "About us"
  resp.render('site/about',{aboutText:aboutText});
}
SiteController.Contact = function(req,resp){
  const contactText = "Contact us"
  resp.render('site/contact',{contactText:contactText});
}


module.exports = SiteController
