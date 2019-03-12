let router = require('express').Router();
let loginControler = require('../controlers/login-controller');

router.get('/', loginControler.findAll);
router.get('/:id', loginControler.findById);
router.post('/', loginControler.create);
router.put('/:id', loginControler.update);
router.delete('/:id', loginControler.delete);

module.exports = router;
