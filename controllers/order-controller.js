let Order = require('../models/Order');
let controler = {};

controler.findAll = async (req, res, next) => {
    res.json(await Order.find({}))
};

controler.findById = async (req, res, next) => {
    res.json(await Order.findById(req.params.id))
};

controler.create = async (req, res, next) => {
    try {
        console.log(req.body);
        await Order.create(req.body);
        res.json({
            success: true,
            massage: 'order is successfully added'
        })
    } catch (e) {
        console.log(e.message)
    }
};

controler.put = async (req, res, next) => {
    try {
        await Order.findOneAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        res.json({
            success: true,
            message: 'order is successfully changed'
        })
    } catch (e) {
        console.log(e.message)
    }
};

controler.delete = async (req, res, next) => {
    res.json(await Order.findOneAndDelete(req.params.id));
};

module.exports = controler;