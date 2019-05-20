let Category = require('../models/Category');
let controler = {};

controler.findAll = async (req, res, next)=> {
    res.json(await Category.find({}))
};

controler.findById = async (req, res, next) => {
    res.json(await Category.findById(req.params.id))
};

controler.create = async (req, res, next)=>{
    try {
        console.log(req.body);
        let {name, description} = req.body;
        if (!name | !description){
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

controler.put = async (req, res,next) => {
    try {
        console.log(req.body);
        console.log(req.params.id);
        const {name, description, image} = req.body;

        if (!name | !description) {
            res.json({
                success: false,
                message: 'you must fill up all field'
            })
        }

        await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true});

        res.json({
            success: true,
            message: 'category is successfully updated'
        })

    } catch (e) {
        console.log(e.message)
    }
};

controler.delete = async (req, res, next)=>{
    res.json(await Category.findOneAndDelete(req.params.id))
};

module.exports = controler;
