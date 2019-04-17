let router = require('express').Router();
let RegisterRouter = require('./register-router');
let LoginRouter = require('./login-router');
let LogoutRouter = require('./logout-router');
let ProductRouter = require('./product-router');
let CategoryRouter = require('./category-router');
let ProducerRouter = require('./producer-router');
let AdminRouter = require('./admin-router');

router.use('/register', RegisterRouter);
router.use('/login', LoginRouter);
router.use('/logout', LogoutRouter);
router.use('/category', CategoryRouter);
router.use('/producer', ProducerRouter);
router.use('/product', ProductRouter);
router.use('/admin', AdminRouter);

module.exports = router;
