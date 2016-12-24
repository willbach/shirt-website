//put everything necessary to send emails in this file

var nodemailer = require('nodemailer');

const user = '';
const password = '';
const sender = '';

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: password
    }
};

var transport = nodemailer.createTransport(smtpConfig);

const emailCtrl = {};

emailCtrl.confirmOrder = function(orderInfo) {
    var mailOptions = {
        from: sender,
        to: orderInfo.email,
        subject: 'Order Confirmation', // Subject line
        text: `Hi ${orderInfo.first_name} ${orderInfo.last_name}!
        
Thank you for your order!

Your order ID and shipping address are listed below, please do not hesitate to contact us if you have any further questions.

Order ID Number:
${orderInfo._id}

Shipping Address:
${orderInfo.street}
${orderInfo.street2}
${orderInfo.city}, ${orderInfo.state} ${orderInfo.zip}

- Team`,
        // html: '<b>Hello world ?</b>'
    };
    transport.sendMail(mailOptions, function(error, info) {
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}

emailCtrl.contactUs = function(contactInfo) {
    var mailOptions = {
        from: sender,
        to: contactInfo.email,
        subject: 'New "Contact Us" Submitted', // Subject line
        text: `${contactInfo.name} submitted a contact request for ${contactInfo.reason},
        
"${contactInfo.message}"

- ${contactInfo.email}`,
        // html: '<b>Hello world ?</b>'
    };
    transport.sendMail(mailOptions, function(error, info) {
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}

module.exports = emailCtrl;

