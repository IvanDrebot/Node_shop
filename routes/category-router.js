let router = require('express').Router();
let categoryControler = require('../controlers/category-controller');

router.get('/', categoryControler.findAll);
router.post('/', categoryControler.create);

module.exports = router;
