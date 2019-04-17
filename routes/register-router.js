let router = require('express').Router();
let RegisterControler = require('../controllers/register-controller');

router.get('/', RegisterControler.findAll);
router.post('/', RegisterControler.create);


module.exports = router;
