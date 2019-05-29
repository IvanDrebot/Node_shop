let router = require('express').Router();
let statisticController = require('../controllers/statistic-controller');

router.get('/', statisticController.findAll);

module.exports = router;
