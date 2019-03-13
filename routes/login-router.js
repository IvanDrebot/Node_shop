let router = require('express').Router();
let loginControler = require('../controlers/login-controller');

router.get('/', loginControler.findAll);
router.post('/', loginControler.create);

module.exports = router;
