let router = require('express').Router();
let PhonesControler = require('../../controlers/products/phones-controller');

router.get('/', PhonesControler.findAll);
router.post('/', PhonesControler.create);

module.exports = router;

