let User = require('../models/Users');
let controler = {};

controler.findAll = async (req, res, next)=>{
    req.User = null;
};

module.exports = controler;
