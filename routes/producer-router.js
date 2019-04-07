let router = require('express').Router();
let producerController = require('../controlers/producer-controller');

router.get('/', producerController.findAll);
router.post('/', producerController.create);

module.exports = router;
