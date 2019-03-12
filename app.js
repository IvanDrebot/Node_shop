let express = require('express');
let session = require('express-session');
let cors = require('cors');
let mongoose = require('mongoose');
let app = express();
let mainRouter = require('./routes/main');
mongoose.connect('mongodb://localhost:27017/newProject', ({useNewUrlParser: true}));

app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'f345y5u4h67',
    resave: false,
    saveUnitialized: false
}));

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
