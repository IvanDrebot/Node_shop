let Producer = require('../models/Producer');
let controler = {};

controler.findById = async (req, res, next)=> {
  res.json(await Producer.findById(req.params.id))
};

controler.findAll = async (req, res, next)=> {
    res.json(await Producer.find({}))
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
        let alreadyExists = await Producer.countDocuments({name: name});

        if (alreadyExists) {
            res.json({
                success: false,
                message: 'producer already exists'
            })
        } else {
            await Producer.create(req.body);
            res.json({
                success: true,
                massage: 'producer is successfully created'
            })
        }
    } catch (e) {
        console.log(e.message)
    }
};

controler.delete = async (req, res, next)=>{
    res.json(await Producer.findOneAndDelete(req.params.id))
};

module.exports = controler;
