let User = require('../models/Users');
let controler = {};

controler.delete = async (req, res, next)=>{
    try {
        let token = req.body;
        res.json(token.deleteOne)
    } catch (e) {
        console.log(e)
    }
};

module.exports = controler;
