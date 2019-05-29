let Order = require('../models/Order');
let Product = require('../models/Product');
let controller = {};

controller.findAll = async (req, res, next) => {
    try {
        let orders = await Order.find({});
        let calcOrders = calcOrders(orders);
        res.json(orders)
    } catch (e) {
        console.log(e);
    }
};

module.exports = controller;

function calcOrders(orders) {
    const dailyOrders = {};
    for (const order in orders) {

    }
    return dailyOrders
}
