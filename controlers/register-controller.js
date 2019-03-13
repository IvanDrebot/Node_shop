let User = require('../models/Users');
let ErrorControler = require('../errors/controler-error');
let controler = {};

controler.findAll = async (req, res, next)=>{
    try {
        res.json(await User.find({}))
    } catch (e) {
        next(e)
    }
};

controler.create = async (req, res, next)=>{
    try {
        let newUser = req.body;
        let alreadyExists = await User.countDocuments({email: newUser.email})
        if (alreadyExists){
            res.redirect('/login')
        } else {
            await User.create(newUser);
            res.redirect('/login')
        }

    } catch (e) {
        let errorControler = new ErrorControler('Validation error', 400)
        next(errorControler);
    }
};

module.exports = controler;
