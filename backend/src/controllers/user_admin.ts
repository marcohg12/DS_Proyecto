import { UserT } from "../schemas/user";
import user from "../schemas/user";
const bcrypt = require("bcryptjs");

export async function register_user(data: UserT) {
  const user_email = data.email;
  // Verificamos si ya existe un usuario con el email
  try {
    const result = await user.findOne({ email: user_email });
    if (result) {
      return {
        error: true,
        message: "El correo electrónico ya se encuentra en uso",
      };
    } else {
      data.password = await bcrypt.hash(data.password, 10);
      const new_user = new user(data);
      await new_user.save();
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
