import passportLocal from "passport-local";
import { PassportStatic } from "passport";
import User, { UserT } from "./schemas/userS";
import { getUserByEmail, getUserNoPwd } from "./dao_controllers/userDAO";

const LocalStrategy = passportLocal.Strategy;
const bcrypt = require("bcryptjs");

function initialize(passport: PassportStatic) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email: string, password: string, done) => {
        const user = await getUserByEmail(email);

        if (user == null) {
          return done(null, false, {
            message: "Usuario y/o contraseña incorrectos",
          });
        }

        try {
          if (await bcrypt.compare(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: "Usuario y/o contraseña incorrectos",
            });
          }
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user: UserT, done) => {
    done(null, user.email);
  });
  passport.deserializeUser(async (email: String, done) => {
    return done(null, await getUserNoPwd(email));
  });
}

module.exports = initialize;
