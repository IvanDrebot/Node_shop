let loginUser = require('../models/Users');

// let ErrorControler = require('../errors/controler-error');
let controler = {};

controler.findAll = async (req, res, next)=>{
    try {
        res.json(await loginUser.find({}))
    } catch (e) {
        next(e)
    }
};

controler.create = async (req, res, next)=>{
    try {
        let login = req.body;
        let existsUser = await loginUser.countDocuments({email: login.email, password: login.password
        });
        if (existsUser) {
            res.json('you can go!')
        } else {
            // existsUser.session.loginU = loginU;
            res.json('go fack!')
        }

    } catch (e) {
        res.json(e)
    }
};

module.exports = controler;
