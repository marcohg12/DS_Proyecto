const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
import Database from "./mongo-config";
const databaseInstance = Database;
import express from "express";
import { registerUser } from "./controllers/controller";
const initializePassport = require("./passport-config");

const app = express();

// Configuraciones ------------------------------------------------------------------------------

const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- Dirección de la aplicación de React
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);

// Rutas ----------------------------------------------------------------------------------------

app.post("/login", passport.authenticate("local"), async (req, res) => {
  res.send("Inicio de sesión exitoso");
});

app.get("/get_user", async (req, res) => {
  res.send(req.user);
});

app.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const response = await registerUser(name, email, phone, password);
  res.send(JSON.stringify(response));
});

// -----------------------------------------------------------------------------------------------

app.listen(port);
