let Phones = require('../models/Product');
let controler = {};

controler.findById = async (req, res, next)=>{
  res.json(await Phones.findById(req.params.id))
};

controler.findAll = async (req, res, next)=> {
    // try {
    //     let query = req.query;
    //     let filter = {
    //         q: {
    //             name: query.name ? query.name : '',
    //             price: query.price
    //         },
    //         skip: query.skip ? query.skip : 0,
    //         limit: query.limit ? query.limit : '',
    // };
    //     console.log(filter);
    //
    //     let phones = await Phones.find({name: filter.q.name, price: filter.q.price})
    //         .skip(filter.skip)
    //         .limit(filter.limit)
    //
    //
    //
    //     res.json(phones);
    //
    // } catch (e) {
    //     console.log(e.message)
    // }
// };

    try{
        let query = req.query;

        let {name, price, skip, limit} = query;

        if(name && price){
            res.json(await Phones.find(query)
                // .limit(limit)
                // .skip(skip)
            )
        }
        else if (price){
            res.json(await Phones.find({price: price})
                .limit(limit)
                .skip(skip)
            )
        }
        else if(name){
            res.json(await Phones.find({name: name})
                .limit(limit)
                .skip(skip)
            )
        }
        else {
            res.json(await Phones.find({})
                .limit(limit)
                .skip(skip)
            );
        }

    } catch (e) {
        console.log(e.message)
    }
};


controler.create = async (req, res, next)=>{
    try {
        res.json(await Phones.create(req.body))
    } catch (e) {
        console.log(e.message)
    }
};

module.exports = controler;
