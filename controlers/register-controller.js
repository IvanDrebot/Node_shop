let User = require('../models/Users');
let controler = {};

controler.create = async (req, res, next)=>{
    try {
        let {name, email, password, phone} = req.body;
        if (!name || !email || !password || !phone){
            res.json({
                success: false,
                message: 'some fields are empty'
            })
        }
        let alreadyExists = await User.countDocuments({email: req.body.email});
        if (alreadyExists){
            res.json({
            success: false,
            message: 'Email is already in use'
        });
        } else {
            await User.create({
                name,
                email,
                password,
                phone
            });
            res.json({
                success: true,
                massage: 'User is successfully registered'
            })
        }
    } catch (e) {
        res.json(e);
        console.log(e)
    }
};



controler.findAll = async (req, res, next)=>{
    res.json(await User.find({}))
};

module.exports = controler;
