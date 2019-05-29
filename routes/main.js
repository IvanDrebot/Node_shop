let router = require('express').Router();
let RegisterRouter = require('./register-router');
let LoginRouter = require('./login-router');
let LogoutRouter = require('./logout-router');
let ProductRouter = require('./product-router');
let CategoryRouter = require('./category-router');
let ProducerRouter = require('./producer-router');
let AdminRegisterRouter = require('./adminRegister-router');
let AdminLoginRouter = require('./adminLogin-router');
let OrderRouter = require('./order-router');
let StatisticRouter = require('./statistic-router');

router.use('/register', RegisterRouter);
router.use('/login', LoginRouter);
router.use('/logout', LogoutRouter);
router.use('/category', CategoryRouter);
router.use('/producer', ProducerRouter);
router.use('/product', ProductRouter);
router.use('/admin-register', AdminRegisterRouter);
router.use('/admin-login', AdminLoginRouter);
router.use('/orders', OrderRouter);
router.use('/statistic', StatisticRouter);

module.exports = router;
