let Category = require('../models/Category');
let controler = {};

controler.findAll = async (req, res, next)=> {
    res.json(await Category.find({}))
};

controler.create = async (req, res, next)=>{
    try {
        console.log(req.body);
        let {name} = req.body;
        if (!name){
            res.json({
                success: false,
                message: 'some fields are empty'
            })
        }
        let alreadyExists = await Category.countDocuments({name: name});

        if (alreadyExists) {
            res.json({
                success: false,
                message: 'category already exists'
            })
        } else {
            await Category.create(req.body);
            res.json({
                success: true,
                massage: 'category is successfully created'
            })
        }
    } catch (e) {
        console.log(e.message)
    }
};

controler.delete = async (req, res, next)=>{
    res.json(await Category.findOneAndDelete(req.params.id))
};

module.exports = controler;
