const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
import Database from "./mongo-config";
const databaseInstance = Database;
import express, { Request, Response } from "express";
import { register_user } from "./controllers/controller";
import { UserT } from "./schemas/user";

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

// Rutas ----------------------------------------------------------------------------------------

app.get("/", async (req: Request, res: Response) => {
  res.send("HOLA MUNDO");
});

app.post("/login", async (req: Request, res: Response) => {});

app.post("/signup", async (req: Request, res: Response) => {
  const { name, email, phone, password } = req.body;
  const user: UserT = { name, email, phone, password, role: 1 };
  const response = await register_user(user);
  res.send(JSON.stringify(response));
});

// -----------------------------------------------------------------------------------------------

app.listen(port);
