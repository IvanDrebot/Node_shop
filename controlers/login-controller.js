let LoginUser = require('../models/login');
let ErrorControler = require('../errors/controler-error');
let controler = {};

controler.findById = async (req, res, next)=>{
    try {
        res.json(await LoginUser.findById(req.params.id))
    } catch (e) {
        next(e)
    }
};

controler.findAll = async (req, res, next)=>{
    try {
        res.json(await LoginUser.find({}))
    } catch (e) {
        next(e)
    }
};

controler.create = async (req, res, next)=>{
    try {
        res.json(await LoginUser.create(req.body))
    } catch (e) {
        let errorControler = new ErrorControler('Validation error', 400)
        next(errorControler);
    }
};

controler.update = async (req, res, next)=>{
    try {
        res.json(await LoginUser.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
            )
        )
    } catch (e) {
        next(e)
    }
};

controler.delete = async (req, res, next)=>{
    try {
        res.json(await LoginUser.findByIdAndRemove(req.params.id))
    } catch (e) {
        next(e)
    }
};

module.exports = controler;
