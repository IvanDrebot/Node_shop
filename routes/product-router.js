let router = require('express').Router();
let ProductController = require('../controllers/product-controller');
let upload = require('../helpers/upload');
let checkAuth = require('../middleware/router-protection');

router.get('/', ProductController.findAll);
router.post('/', upload.single('image'), ProductController.create);
router.get('/:id', ProductController.findById);
router.put('/:id', upload.single('image'), ProductController.put);
router.delete('/:id', ProductController.delete);

module.exports = router;