import {
  registerUser as register,
  getUserByEmail,
} from "../dao_controllers/userDAO";
const bcrypt = require("bcryptjs");

// Registra un usuario
export async function registerUser(
  name: String,
  email: String,
  phone: String,
  password: String
) {
  // Verificamos si ya existe un usuario con el email
  try {
    const result = await getUserByEmail(email);
    if (result) {
      return {
        error: true,
        message: "El correo electrónico ya se encuentra en uso",
      };
    } else {
      await register(name, email, phone, password);
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
