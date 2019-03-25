let router = require('express').Router();
let logoutController = require('../controlers/logout-controller');

router.get('/', logoutController.delete);

module.exports = router;
