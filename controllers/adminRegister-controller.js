let Admin = require('../models/Admin');
let controler = {};

controler.register = async (req, res, next)=>{
    try {
        console.log(req.body);
        let {name, surname, email, password, phone,} = req.body;
        if (!name || !email || !password || !phone | !surname){
            res.json({
                success: false,
                message: 'some fields are empty'
            })
        }
        let alreadyExists = await Admin.countDocuments({email: req.body.email});
        if (alreadyExists){
            res.json({
                success: false,
                message: 'Email is already in use'
            });
        } else {
            await Admin.create({
                name,
                surname,
                email,
                password,
                phone
            });
            res.json({
                success: true,
                massage: 'Admin is successfully registered'
            })
        }
    } catch (e) {
        res.json(e);
        console.log(e)
    }
};

controler.logout = async (req, res, next)=>{
    try {
        let token = req.body;
        res.json(token.deleteOne)
    } catch (e) {
        console.log(e)
    }
};

module.exports = controler;