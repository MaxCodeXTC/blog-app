const User = require('../models/User')

exports.login = function(req, res) {
  let user = new User(req.body)
  user.login().then(function(result) {
    //a new property named user is being created in the req.session object
    req.session.user = {
      loginInfo: "initial",
      username: user.data.username //coming from User.js in the login prototype method.
    }
    req.session.save(function() {
      res.redirect("/")
    })
  }).catch(function(e) {
    res.send(e)
  })
}

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect("/")
  })
}

exports.register = function(req, res) {
  let user = new User(req.body)
  user.register()
  if (user.errors.length) {
    res.send(user.errors)
  } else {
    res.send("Congrats, there are no errors.")
  }
}

exports.home = function(req, res) {
  if (req.session.user) {
    res.render("home-dashboard", {
      username: req.session.user.username
    })
  } else {
    res.render("home-guest")
  }
}