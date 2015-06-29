var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'Gmail',
    auth : {
        user : process.env.EMAILID,
        pass : process.env.MAILPASSWORD
    }
});

module.exports = transporter;