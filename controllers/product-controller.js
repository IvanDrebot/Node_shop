let Product = require('../models/Product');
let controler = {};

controler.findById = async (req, res, next) => {
    res.json(await Product.findById(req.params.id)
        .populate({path: 'producer'})
        .populate({path: 'category'})
    )
};


controler.findAll = async (req, res, next) => {
    try {
        const {
            skip, limit,
            min = 0, max = 100000,
            ...others
        } = req.query;
        const obj1 = {skip, limit};
        const obj2 = {others};


        let products = await Product.find(obj2.others)
            .find({price: {$gte: min, $lte: max}})
            .limit(obj1.limit)
            .skip(obj1.skip)
            .populate({
                path: 'producer',
                select: 'name _id'
            })
            .populate({
                path: 'category',
                select: 'name _id'
            });

        const filters = [];

        let filterKey = await Product.find(obj2.others);
        for (const key of filterKey) {
            for (const value of JSON.parse(key.description)) {
                filters.push(value)
            }
        }

        // console.log(filters);

        let count = await Product.countDocuments(obj2.others);

        res.json({products, count, filters})

    } catch (e) {
        console.log(e.message);
    }
};

controler.create = async (req, res, next) => {
    try {
        console.log(req.body);
        let {category, producer, brand, price} = req.body;
        if (!category || !producer || !price || !brand) {
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

controler.put = async (req, res, next) => {
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

        await Product.findByIdAndUpdate(
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

controler.delete = async (req, res, next) => {
    res.json(await Product.findByIdAndDelete(req.params.id))
};

module.exports = controler;
