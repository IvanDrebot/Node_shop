let router = require('express').Router();
let ProductControler = require('../controllers/product-controller');

router.get('/', ProductControler.findAll);
router.post('/', ProductControler.create);
router.get('/:id', ProductControler.findById);
router.delete('/:id', ProductControler.delete);

module.exports = router;
