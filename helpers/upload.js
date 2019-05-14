const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        const filename = `${date}-${file.originalname}`;
        req.body.image = filename;
        cb(null, filename)
    }
});

module.exports = multer({
    storage: storage
});