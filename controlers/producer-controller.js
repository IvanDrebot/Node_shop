let Producer = require('../models/Producer');
let controler = {};

controler.findAll = async (req, res, next)=> {
    res.json(await Producer.find({})
        // .populate('producer')
    )
};

controler.create = async (req, res, next)=>{
    try {
        res.json(await Producer.create(req.body))
    } catch (e) {
        console.log(e.message)
    }
};

module.exports = controler;
