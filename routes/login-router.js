let router = require('express').Router();
let loginControler = require('../controllers/login-controller');

router.get('/', loginControler.findAll);
router.post('/', loginControler.create);

module.exports = router;
