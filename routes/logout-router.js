let router = require('express').Router();
let logoutController = require('../controlers/login-controller');

router.get('/', logoutController.findAll);

module.exports = router;
