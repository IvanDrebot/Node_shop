let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');
let app = express();
let mainRouter = require('./routes/main');
mongoose.connect('mongodb://localhost:27017/onlineStore', ({useNewUrlParser: true}));

let pdfDoc = require('./pdf/mainPdf');

app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('uploads'));

app.use('/api', mainRouter);

app.use('/test', async (req, res, next) => {
    console.log(req.body);

    pdfDoc.getBase64((data) => {
        const download = Buffer.from(data.toString('utf-8'), 'base64');
        res.contentType("application/pdf");
        res.send(download);
    });
});

app.use((req, res, next) => {
    next(new Error('Not found'))
});
app.use((err, req, res, next) => {
    res.status(404).json(err)
});
app.listen(3000, () => {
    console.log('listening...')
});
