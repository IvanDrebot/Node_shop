let router = require('express').Router();
let RegisterRouter = require('./register-router');
let LoginRouter = require('./login-router');
let LogoutRouter = require('./logout-router');

router.use('/register', RegisterRouter);
router.use('/login', LoginRouter);
router.use('/logout', LogoutRouter);

module.exports = router;
