import express, { Request, Response } from "express";
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

const users: Array<JSON> = [];

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

// Rutas ----------------------------------------------------------------------------------------

app.get("/", async (req: Request, res: Response) => {
  res.send("HOLA MUNDO");
});

app.post("/login", async (req: Request, res: Response) => {});

app.post("/signup", async (req: Request, res: Response) => {
  users.push(req.body);
  console.log(users);
  res.send(
    JSON.stringify({ error: false, message: "Usuario registrado exitosamente" })
  );
});

// -----------------------------------------------------------------------------------------------

app.listen(port);
