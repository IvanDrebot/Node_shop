let Phones = require('../../models/Phones');
let controler = {};


controler.findAll = async (req, res, next)=>{
    res.json(await Phones.find({})
        .skip(0)
        .limit(2)
    )
};

controler.create = async (req, res, next)=>{
    res.json(await Phones.create(req.body))
};

module.exports = controler;
