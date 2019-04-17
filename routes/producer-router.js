let router = require('express').Router();
let producerController = require('../controllers/producer-controller');

router.get('/', producerController.findAll);
router.post('/', producerController.create);
router.get('/:id', producerController.findById);
router.delete('/:id', producerController.delete);

module.exports = router;
