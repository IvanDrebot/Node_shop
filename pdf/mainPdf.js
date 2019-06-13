let pdfMake = require('pdfmake/build/pdfmake.js');
let pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

let pdfDoc = {
    content: [
        {
            text: 'ДОГОВІР №',
            style: 'header',
            alignment: 'center'
        },
        {
            text: 'ПРО НАДАННЯ ІНФОРМАЦІЙНО-КОНСУЛЬТАЦІЙНИХ ПОСЛУГ.\n',
            alignment: 'center'
        },
        {
            text: 'м. Львів'
        }
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            alignment: 'justify'
        }
    }
};


module.exports = pdfMake.createPdf(pdfDoc);
