let router = require('express').Router();
let brandControler = require('../controlers/brand-controller');

router.get('/', brandControler.findAll);
router.post('/', brandControler.create);

module.exports = router;
