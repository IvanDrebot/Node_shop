let router = require('express').Router();
let categoryControler = require('../controllers/category-controller');

router.get('/', categoryControler.findAll);
router.post('/', categoryControler.create);
router.delete('/', categoryControler.delete);

module.exports = router;
