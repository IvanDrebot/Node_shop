let Order = require('../models/Order');
let moment = require('moment');
let controller = {};

controller.findAll = async (req, res, next) => {
    try {
        let orders = await Order.find({}).sort();
        let ordersMap = calcOrders(orders);
        res.json(ordersMap)
    } catch (e) {
        console.log(e);
    }
};

module.exports = controller;

function calcOrders(orders) {
    const dailyOrders = {};
    orders.forEach(order => {
       const date = moment(order.date).format('DD.MM.YYYY');
        if (date === moment().format('DD.MM.YYYY')) {
            return
        }
        if (!dailyOrders[date]) {
            dailyOrders[date] = []
        }
        dailyOrders[date].push(order)
    });
        return dailyOrders
}
