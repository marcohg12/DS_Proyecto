import User, { UserT } from "../schemas/userS";
const { EmailInUse } = require("../exceptions/exceptions");
const bcrypt = require("bcryptjs");

// Registra un usuario
// Por defecto lo registra como cliente, NO COMO ADMINISTRADOR
// Se encarga de encriptar la contraseña
export async function registerUser(
  name: String,
  email: String,
  phone: String,
  password: String
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name: name,
    email: email,
    phone: phone,
    password: hashedPassword,
    role: 1,
  });
  return await user.save();
}

// Actualiza un usuario
// Se encarga de encriptar la contraseña del usuario
export async function updateUser(
  userId: String,
  name: String,
  email: String,
  phone: String,
  password: String
) {
  const checkUser = await getUserByEmail(email);

  // Verificamos que otro usuario no tenga el mismo correo
  if (checkUser && checkUser._id != userId) {
    throw new EmailInUse();
  }

  // Si hay una contraseña nueva, la actualizamos
  if (password != "") {
    updatePassword(email, password);
  }

  return await User.updateOne(
    { _id: userId },
    { name: name, email: email, phone: phone }
  );
}

// Actualiza la contraseña de un usuario
// Se encarga de encriptar la contraseña
export async function updatePassword(email: String, password: String) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.updateOne({ email: email }, { password: hashedPassword });
}

// Actualiza el código de recuperación de contraseña de un usuario
export async function updateRecoverCode(email: String, code: String) {
  return await User.updateOne({ email: email }, { recoverCode: code });
}

// Verifica si el código de recuperación ingresado por un usuario es igual al de la BD
export async function compareRecoverCode(email: String, code: String) {
  const user = await getUserByEmail(email);
  if (!user) {
    return false;
  }
  return user.recoverCode == code;
}

// Retorna un usuario por id
export async function getUserByID(id: String) {}

// Retorna un usuario por email
export async function getUserByEmail(email: String) {
  return await User.findOne({ email: email });
}

// Retorna un usuario por email pero no retorna la contraseña del usuario
export async function getUserNoPwd(email: String) {
  const user: UserT | null = await User.findOne({ email: email });
  if (user == null) {
    return null;
  }
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
  };
}
