"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'codeduende@gmail.com',
        pass: 'btkhgxybyxemyqjq',
    },
});
var mailOptions = {
    from: 'codeduende@gmail.com',
    to: 'nicolerodriguezluna@gmail.com',
    subject: 'Asunto de prueba',
    text: 'Este es el correo de web duende',
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error('Error al enviar el correo:', error);
    }
    else {
        console.log('Correo electrónico enviado:', info.response);
    }
});
