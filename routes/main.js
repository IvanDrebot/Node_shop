let router = require('express').Router();
let userRouter = require('./users-router');

router.use('users/',userRouter);

module.exports = router;
