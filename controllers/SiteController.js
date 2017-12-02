var SiteController = {
  'Index':function(req,resp){resp.render('site/index')},
  'About':function(req,resp){resp.render('site/about')},
  'Contact':function(req,resp){resp.render('site/contact')}
}

// Sitecontroller.prototype.Index = function

//   }
//   About(){
//
//   }
//   Contact(){
//
//   }
// }
//  Index(){
//     return ("Do sth Index")
//   }
//   About(){
//     return ("Do sth About")
//   }
//   Contact(){
//     return ("Do sth Contact")
//   }
//
// }
module.exports = SiteController
