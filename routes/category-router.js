let router = require('express').Router();
let categoryControler = require('../controllers/category-controller');
let upload = require('../helpers/upload');

router.get('/', categoryControler.findAll);
router.get('/:id', categoryControler.findById);
router.post('/', upload.single('image'), categoryControler.create);
router.put('/:id', upload.single('image'), categoryControler.put);
router.delete('/:id', categoryControler.delete);

module.exports = router;