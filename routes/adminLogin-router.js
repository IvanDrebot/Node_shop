let router = require('express').Router();
let AdminLoginRouter = require('../controllers/adminLogin-controller');

router.post('/', AdminLoginRouter.login);

module.exports = router;