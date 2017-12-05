const SiteController={}

  static Index(req, resp){
    resp.render('site/index');
  }
  static About(req, resp){
    resp.render('site/about');
  }
  static Contact(req, resp){
    resp.render('site/contact');
  }


module.exports=SiteController;
