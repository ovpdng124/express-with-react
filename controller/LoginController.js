exports.showLoginForm = function (req, res) {
  res.render('authentication/login-form', { title: 'Login'});
}

exports.login = (req, res) => {
  const username = req.body.name;
  const password = req.body.password;

  res.send({
    username,
    password,
  });
}
