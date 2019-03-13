let router = require('express').Router();
let RegisterControler = require('../controlers/register-controller');

router.get('/', RegisterControler.findAll);
router.post('/', RegisterControler.create);


module.exports = router;
