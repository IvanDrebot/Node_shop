let router = require('express').Router();
let RegisterControler = require('../controlers/register-controller');

router.get('/', RegisterControler.findAll);
router.get('/:id', RegisterControler.findById);
router.post('/', RegisterControler.create);
router.put('/:id', RegisterControler.update);
router.delete('/:id', RegisterControler.delete);

module.exports = router;
