const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const bodyParser = require("body-parser");
const passport = require("passport");
import { Database } from "./mongo-config";
const databaseInstance = Database.getInstance();
databaseInstance.connect();
const clientRouter = require("./routers/clientRouter");
const adminRouter = require("./routers/adminRouter");
const generalRouter = require("./routers/generalRouter");
import express from "express";
const expressStatic = express.static;
import { Controller } from "./controllers/Controller";
const initializePassport = require("./passport-config");

const app = express();

// Configuraciones ------------------------------------------------------------------------------

const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ".onrender.com", // <-- Dirección de la aplicación de React
    credentials: true,
    methods: "GET, POST",
  })
);

app.use(
  session({
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false, // For HTTPS-only cookies
      sameSite: "none", // For cross-site cookies
      domain: ".onrender.com", // Set to your top-level domain
    },
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);

// Rutas ----------------------------------------------------------------------------------------

app.post("/login", passport.authenticate("local"), async (req, res) => {
  res.send(JSON.stringify({ error: false, message: "SUCCESS_LOGIN" }));
});

app.get("/get_user", async (req, res) => {
  console.log(req);
  res.send(JSON.stringify(req.user));
});

app.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const controller = Controller.getInstance();
  const response = await controller.registerUser(name, email, phone, password);
  res.send(JSON.stringify(response));
});

app.get("/logout", (req, res) => {
  req.logOut(function () {
    res.send(JSON.stringify({ error: false, message: "SUCCESS_LOGOUT" }));
  });
});

app.use("/admin", adminRouter);
app.use("/general", generalRouter);
app.use("/client", clientRouter);
app.use("/photos/products", expressStatic("./photos/products"));
app.use("/photos/publications", expressStatic("./photos/publications"));
app.use("/photos/payments", expressStatic("./photos/payments"));
app.listen(port);
