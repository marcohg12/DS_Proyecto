import * as user_controller from "./user_admin";
import { UserT } from "../schemas/user";

// Funciones de usuario ----------------------------------------------------------------

export async function register_user(user: UserT) {
  return await user_controller.register_user(user);
}

// Funciones de cliente ----------------------------------------------------------------

// Funciones de administrador ----------------------------------------------------------
