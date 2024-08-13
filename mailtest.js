const nodemailer = require('nodemailer');
const path = require('path');
let transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 25, // or the port your server is using
    secure: false, // true for 465, false for other ports
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificatess
    },
});

let mailOptions = {
    from: '"Tester" <test@prathamesh.com>', // sender address
    to: ['prathameshpatil2323@gmail.com', 'recipient1@example.com', 'recipient2@example.com'], // list of receivers
    subject: 'Hello 3', // Subject line
    text: 'Hello world 3?', // plain text body
    html: '<b>Hello world 3</b>', // html body
    inReplyTo:'<bcc3595f-7687-29bd-95c6-5b3ebb59fb62@prathamesh.com>'
    // attachments: [
    //     {
    //         filename: 'gandhi.jpg', // The name of the file to be sent
    //         path: path.join(__dirname, 'gandhi.jpg'), // File path 
    //         // content: 'hello world!' 
    //     },
    //     {
    //         filename: 'testbook.xlsx', // The name of the file to be sent
    //         path: path.join(__dirname, 'testbook.xlsx'), // File path
    //         // You can also specify content instead of path:
    //         // content: 'hello world!' 
    //     }
    // ],

};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
