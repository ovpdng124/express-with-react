var express = require('express');
var router = express.Router();
var loginController = require('../controller/LoginController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', layout:'layouts/sidebar'});
});

router.get('/react-test', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}, (req, res) => {
  res.json({ status: 'Succeed', message: 'Congratulation!!!'})
})

/* Login. */
router.get('/login', loginController.showLoginForm);
router.post('/login', loginController.login);


module.exports = router;
