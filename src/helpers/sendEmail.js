const nodemailer = require('nodemailer');
require('dotenv').config();

const { UKRNET_EMAIL, UKRNET_PASSWORD } = process.env;

const transporterConfig = {
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  auth: {
    user: UKRNET_EMAIL,
    pass: UKRNET_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(transporterConfig);

const sendEmail = async email => {
  transporter
    .sendMail(email)
    .then(() => console.log('Email send success'))
    .catch(error => console.log(error.message));
};

module.exports = sendEmail;
