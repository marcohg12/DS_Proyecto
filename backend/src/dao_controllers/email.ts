import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
    user: 'codeduende@gmail.com', 
    pass: 'btkhgxybyxemyqjq',
    },
});

// Genera una clave única.
const generateUniqueKey = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const keyLength = 10; // Longitud de la clave deseada
  
    const key = Array.from({ length: keyLength }, () => characters.charAt(Math.floor(Math.random() * characters.length)).toString()).join('');
  
    return key;
  };
  
  export const sendRecoveryEmail = (userEmail: string) => {
    // Genera la clave única
    const recoveryKey = generateUniqueKey();
  
    const mailOptions = {
      from: 'codeduende@gmail.com', // Cambia a tu dirección de correo
      to: userEmail, // Envía el correo a la dirección del usuario
      subject: 'Recuperación de tu contraseña.',
      text: `Tu clave de recuperación de cuenta es: ${recoveryKey}`,
    };
  
    // Envía el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
      } else {
        console.log('Correo electrónico enviado:', info.response);
      }
    });
  };