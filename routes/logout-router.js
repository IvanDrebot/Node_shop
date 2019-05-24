let router = require('express').Router();
let logoutController = require('../controllers/logout-controller');

router.get('/', logoutController.delete);

module.exports = router;