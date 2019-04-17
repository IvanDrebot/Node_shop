let Product = require('../models/Product');
let controler = {};

controler.findAll = async (req, res, next)=> {
    let countOfProduct = await Product.countDocuments({});
    res.status(200).json(
        countOfProduct
    )
};

controler.findById = async (req, res, next) => {
    res.json(await Product.findById(req.params.id)
        .populate({
            path: 'producer',
            // select: '-name _id'
        })
        .populate({
            path: 'category',
            // select: '-name _id'
        })
    )
};

controler.create = async (req, res, next)=>{
    try {
        console.log(req.body);
        let {category, producer, brand, imgUrl, price} = req.body;
        if (!category || !producer || !price || !brand){
            res.json({
                success: false,
                message: 'some fields are empty'
            })
        }
        let alreadyExists = await Product.countDocuments({brand: brand});

        if (alreadyExists) {
            res.json({
                success: false,
                message: 'product already exists'
            })
        } else {
            await Product.create(req.body);
            res.json({
                success: true,
                massage: 'product is successfully created'
            })
        }
    } catch (e) {
        console.log(e.message)
    }
};

controler.put = async (req, res,next) => {
    try {
        console.log(req.params.id);
        console.log(req.body);
        const {category, producer, price, brand, imgUrl} = req.body;

        if (!category || !producer || !price || !brand) {
            res.json({
                success: false,
                message: 'you must fill up all field'
            })
        }

        await Product.findOneAndUpdate(
                req.params.id,
                req.body,
                {new: true});

            res.json({
                success: true,
                message: 'product is successfully updated'
            })

    } catch (e) {
        console.log(e.message)
    }
};

controler.delete = async (req, res, next)=>{
        res.json(await Product.findOneAndDelete(req.params.id));
};

module.exports = controler;
