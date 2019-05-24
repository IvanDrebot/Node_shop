let router = require('express').Router();
let AdminRegisterRouter = require('../controllers/adminRegister-controller');

router.post('/', AdminRegisterRouter.register);
router.get('/', AdminRegisterRouter.logout);


module.exports = router;