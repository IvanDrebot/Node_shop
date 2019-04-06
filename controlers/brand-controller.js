let Brand = require('../models/Brand');
let controler = {};

controler.findAll = async (req, res, next)=> {
    res.json(await Brand.find({}))
};

controler.create = async (req, res, next)=>{
    try {
        res.json(await Brand.create(req.body))
    } catch (e) {
        console.log(e.message)
    }
};

module.exports = controler;
