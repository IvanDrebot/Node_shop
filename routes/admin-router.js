let router = require('express').Router();
let AdminRouter = require('../controllers/admin-controller');
let upload = require('../helpers/upload');

router.get('/', AdminRouter.findAll);
router.post('/', upload.single('image'), AdminRouter.create);
router.get('/:id', AdminRouter.findById);
router.put('/:id', AdminRouter.put);
router.delete('/:id', AdminRouter.delete);

module.exports = router;
