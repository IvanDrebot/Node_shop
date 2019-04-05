let router = require('express').Router();
let RegisterRouter = require('./register-router');
let LoginRouter = require('./login-router');
let LogoutRouter = require('./logout-router');
let PhonesRouter = require('./phones-router');
let CategoryRouter = require('./category-router');

router.use('/register', RegisterRouter);
router.use('/login', LoginRouter);
router.use('/logout', LogoutRouter);
router.use('/category', CategoryRouter);
router.use('/product', PhonesRouter);
router.use('/phone/:id', PhonesRouter);

module.exports = router;
