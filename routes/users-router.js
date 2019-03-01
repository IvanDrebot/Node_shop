let router = require('express').Router();
let usersControler = require('../controlers/users-controler');

router.get('/', usersControler.findAll);
router.get('/:id', usersControler.findById);
router.post('/', usersControler.create);
router.put('/:id', usersControler.update);
router.delete('/:id', usersControler.delete);

module.exports = router;
