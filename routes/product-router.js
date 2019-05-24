let router = require('express').Router();
let ProductControler = require('../controllers/product-controller');
let upload = require('../helpers/upload');

router.get('/', ProductControler.findAll);
router.post('/', upload.single('image'), ProductControler.create);
router.get('/:id', ProductControler.findById);
router.put('/:id', upload.single('image'), ProductControler.put);
router.delete('/:id', ProductControler.delete);

module.exports = router;