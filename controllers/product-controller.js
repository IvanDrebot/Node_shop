let Product = require('../models/Product');
let controler = {};

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

// controler.findAll = async (req, res, next) => {
//     try {
//         const {skip, limit , ...others} = req.query;
//         const obj1 = {skip, limit};
//         const obj2 = {...others};
//         console.log(req.query);
//
//         res.json(await Product.find(obj2)
//             .limit(obj1.limit)
//             .skip(obj1.skip)
//             .populate({
//                 path: 'producer',
//                 select: 'name _id'
//             })
//             .populate({
//                 path: 'category',
//                 select: 'name _id'
//             })
//         )
//     } catch (e) {
//         console.log(e.message);
//     }
// };

controler.findAll = async (req, res, next) => {
    try {
        const {skip, limit, min, max, ...others} = req.query;
        const obj1 = {skip, limit};
        const obj2 = {...others};
        const obj3 = {min, max};

        if (obj3.min && obj3.max) {
            let products = await Product.find(obj2)
                .find({price: {$gte: obj3.min, $lte: obj3.max}})
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

            let count = await Product.countDocuments(
                {price: {$gte: obj3.min, $lte: obj3.max}});

            res.json({products, count})

        } else {
            let products = await Product.find(obj2)
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

            let count = await Product.countDocuments(obj2);

            res.json({products, count})
        }
    } catch (e) {
        console.log(e.message);
    }
};

controler.create = async (req, res, next) => {
    try {
        console.log(req.body);
        res.json(await Product.find(req.body)
            .populate({
                path: 'producer',
                select: 'name _id'
            })
            .populate({
                path: 'category',
                select: 'name _id'
            })
        )

    } catch (e) {
        console.log(e.message)
    }
};


controler.delete = async (req, res, next) => {
    console.log(req.params.id);
    res.json(await Product.findOneAndDelete(req.params.id))
};

module.exports = controler;


// try {
//     let query = req.query;
//     let filter = {
//             q: {
//                 name: query.name ? query.name : '',
//                 price: query.price
//             },
//             skip: query.skip ? query.skip : 0,
//             limit: query.limit ? query.limit : '',
//     };
//         console.log(filter);
//
//         let phones = await Phones.find({name: filter.q.name, price: filter.q.price})
//             .skip(filter.skip)
//             .limit(filter.limit)
//
//
//
//         res.json(phones);
//
//     } catch (e) {
//         console.log(e.message)
//     }
// };

// try{
//     let query = req.query;
//
//     let {name, price, skip, limit} = query;
//
//     if(name && price){
//         res.json(await Product.find(query)
//             .limit(limit)
//             .skip(skip)
// )
// }
// else if (price){
//     res.json(await Product.find({price: price})
//         .limit(limit)
//         .skip(skip)
//     )
// }
// else if(name){
//     res.json(await Product.find({name: name})
//         .limit(limit)
//         .skip(skip)
//     )
// }
// else {
//     res.json(await Product.find({})
//         .limit(limit)
//         .skip(skip)
//     );
// }
//
// } catch (e) {
//     console.log(e.message)
// }
// };
