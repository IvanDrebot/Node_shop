let loginUser = require('../models/Users');
let jwt = require('jsonwebtoken');
let controler = {};


controler.create = async (req, res, next)=>{
    try {
        let alreadyExists = await loginUser.countDocuments({
            email: req.body.email,
            password: req.body.password
        });
        if (alreadyExists) {
         const token = jwt.sign({
           email: req.body.email},'sercer',{expiresIn: "1h"});
            res.json({
                response: true,
                message: token
            });
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
