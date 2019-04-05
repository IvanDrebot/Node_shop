let Category = require('../models/Category');
let controler = {};

controler.findAll = async (req, res, next)=> {
    res.json(await Category.find({}))
};

controler.create = async (req, res, next)=>{
    try {
        res.json(await Category.create(req.body))
    } catch (e) {
        console.log(e.message)
    }
};

module.exports = controler;
