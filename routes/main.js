let router = require('express').Router();
let RegisterRouter = require('./register-router');
let LoginRouter = require('./login-router');

router.use('/register', RegisterRouter);
router.use('/login', LoginRouter);

module.exports = router;
