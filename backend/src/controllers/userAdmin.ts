import * as userDAO from "../dao_controllers/userDAO";
import { sendEmail } from "./emailService";
const bcrypt = require("bcryptjs");

// Funciones auxiliares -------------------------------------------------------------------

function generateNumericPasswordRecoveryCode(length: number) {
  const charset = "0123456789";
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    code += charset[randomIndex];
  }

  return code;
}

// ----------------------------------------------------------------------------------------

// Registra un usuario
export async function registerUser(
  name: String,
  email: String,
  phone: String,
  password: String
) {
  // Verificamos si ya existe un usuario con el email
  try {
    const result = await userDAO.getUserByEmail(email);
    if (result) {
      return {
        error: true,
        message: "El correo electrónico ya se encuentra en uso",
      };
    } else {
      await userDAO.registerUser(name, email, phone, password);
      return {
        error: false,
        message: "Usuario registrado exitosamente",
      };
    }
  } catch (err) {
    return {
      error: true,
      message: "Ocurrió un error inesperado, intente de nuevo",
    };
  }
}

// Actualiza los datos de un usuario
export async function updateUser(
  userId: String,
  name: String,
  email: String,
  phone: String,
  password: String
) {
  await userDAO.updateUser(userId, name, email, phone, password);
}

// Actualiza la contraseña de un usuario
export async function updatePassword(email: String, password: String) {
  await userDAO.updatePassword(email, password);
}

// Actualiza el código de recuperación de contraseña de un usuario
export async function updateRecoverCode(email: String) {
  const code = generateNumericPasswordRecoveryCode(8);
  const content = "El código de recuperación es: " + code.toString();
  sendEmail(
    email.toString(),
    "Sistema Duende - Código de recuperación de contraseña",
    content
  );
  await userDAO.updateRecoverCode(email, code);
}

// Verifica si el código de recuperación ingresado por un usuario es igual al de la BD
export async function compareRecoverCode(email: String, code: String) {
  return await userDAO.compareRecoverCode(email, code);
}

// Verifica si existe el usuario con el email del parámetro
export async function userExists(email: String) {
  const user = await userDAO.getUserByEmail(email);
  const result = user ? true : false;
  if (result) {
    updateRecoverCode(email);
  }
  return result;
}
