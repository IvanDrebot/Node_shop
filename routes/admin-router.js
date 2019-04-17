let router = require('express').Router();
let AdminRouter = require('../controllers/admin-controller');

router.get('/', AdminRouter.findAll);
router.post('/', AdminRouter.create);
router.get('/:id', AdminRouter.findById);
router.put('/:id', AdminRouter.put);
router.delete('/:id', AdminRouter.delete);

module.exports = router;
