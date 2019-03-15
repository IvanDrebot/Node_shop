let loginUser = require('../models/Users');
let token = require('jsonwebtoken');
let controler = {};


controler.create = async (req, res, next)=>{
    try {
        let alreadyExists = await loginUser.countDocuments({
            email: req.body.email,
            password: req.body.password
        });
        if (alreadyExists) {
            res.json({
                response: true,
                message: 'you can go'
            })
        } else {
            res.json({
                response: false,
                message: 'some fields are empty or user not exists'
            })
        }

    } catch (e) {
        res.json(e);
        console.log(e)
    }
};

controler.findAll = async (req, res, next)=>{
    res.json(await loginUser.find({}))
};

module.exports = controler;
