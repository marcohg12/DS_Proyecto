import User, { UserT } from "../schemas/userS";
const bcrypt = require("bcryptjs");

// Registra un usuario
// Por defecto lo registra como cliente, NO COMO ADMINISTRADOR
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
