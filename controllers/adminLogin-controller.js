let Admin = require('../models/Admin');
let jwt = require('jsonwebtoken');
let controler = {};

controler.login = async (req, res, next)=>{
    try {
        console.log(req.body);
        let alreadyExists = await Admin.countDocuments({
            email: req.body.email,
            password: req.body.password
        });
        if (alreadyExists) {
            const token = jwt.sign({
                email: req.body.email},'sercet',{expiresIn: "1h"});
            res.json({
                success: true,
                message: token
            });
        } else {
            res.json({
                success: false,
                message: 'some fields are empty or admin not exists'
            })
        }

    } catch (e) {
        res.json(e);
        console.log(e)
    }
};

module.exports = controler;