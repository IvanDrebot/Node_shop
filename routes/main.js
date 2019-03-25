let router = require('express').Router();
let RegisterRouter = require('./register-router');
let LoginRouter = require('./login-router');
let LogoutRouter = require('./logout-router');
let PhonesRouter = require('./products/phones-router');

router.use('/register', RegisterRouter);
router.use('/login', LoginRouter);
router.use('/logout', LogoutRouter);
router.use('/phone', PhonesRouter);

module.exports = router;
