let router = require('express').Router();
let orderController = require('../controllers/order-controller');

router.get('/', orderController.findAll);
router.get('/:id', orderController.findById);
router.post('/', orderController.create);
router.put('/:id', orderController.put);
router.delete('/:id', orderController.delete);

module.exports = router;