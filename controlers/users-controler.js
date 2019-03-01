let users = require('../models/users');
// let ErrorControler = require('../errors/controler-error');
let controler = {};

controler.findById = async (req, res, next)=>{
    try {
        res.json(await users.findById(req.params.id))
    } catch (e) {
        next(e)
    }
};

controler.findAll = async (req, res, next)=>{
    try {
        res.json(await users.find({}))
    } catch (e) {
        next(e)
    }
};

controler.create = async (req, res, next)=>{
    try {
        res.json(await users.create(req.body))
    } catch (e) {
        let errorControler = new ErrorControler('Validation error', 400)
        next(errorControler);
    }
};

controler.update = async (req, res, next)=>{
    try {
        res.json(await users.findByIdAndUpdate(
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
        res.json(await users.findByIdAndRemove(req.params.id))
    } catch (e) {
        next(e)
    }
};

module.exports = controler;
