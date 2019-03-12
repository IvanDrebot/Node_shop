let RegisterUser = require('../models/register');
let ErrorControler = require('../errors/controler-error');
let controler = {};

controler.findById = async (req, res, next)=>{
    try {
        res.json(await RegisterUser.findById(req.params.id))
    } catch (e) {
        next(e)
    }
};

controler.findAll = async (req, res, next)=>{
    try {
        res.json(await RegisterUser.find({}))
    } catch (e) {
        next(e)
    }
};

controler.create = async (req, res, next)=>{
    try {
        res.json(await RegisterUser.create(req.body))
    } catch (e) {
        let errorControler = new ErrorControler('Validation error', 400)
        next(errorControler);
    }
};

controler.update = async (req, res, next)=>{
    try {
        res.json(await RegisterUser.findByIdAndUpdate(
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
        res.json(await RegisterUser.findByIdAndRemove(req.params.id))
    } catch (e) {
        next(e)
    }
};

module.exports = controler;
