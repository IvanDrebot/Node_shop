let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');
let app = express();
let mainRouter = require('./routes/main');
mongoose.connect('mongodb://localhost:27017/onlineShop', ({useNewUrlParser: true}));
// let category = require('./models/Category');
// let brand = require('./models/Producer');
// let product = require('./models/Product');

app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Fabric for Models-----------------------------------
// try{
// async function start(){
//     console.log(await product.create({
//     category: '5ca64b2dfd73fe2ae8141885',
//     imgUrl: '',
//     price: 5000
//     }));
// }
// start().then(()=>{
//     console.log('ok');
// })}catch (e) {
//     console.log(e.message)
// }

// Fabric for Models---------------------------------


app.use('/api', mainRouter);


app.use((req, res, next)=>{
    next(new Error('Not found'))
});
app.use((err, req, res, next)=>{
   res.status(404).json(err)
});

app.listen(3000, ()=>{
   console.log('listening...')
});
