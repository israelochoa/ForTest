import express from "express";
import path from "path";
import morgan from "morgan";
import routes from "./routes/index.js";

import config from "./config.js";
var conn = mysql.createConnection({host: {your_host}, user: {username@servername}, password: {your_password}, database: {your_database}, Port: {your_port}[, ssl:{ca:fs.readFileSync({ca-cert filename})}}]);
const app = express();
// Settings
app.set("port", config.PORT);
app.set("views", path.resolve("./src/views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// global variables
app.use((req, res, next) => {
  console.log(config.APPID)
  app.locals.APPID = config.APPID;
  next();
});

// Routes
app.use(routes);

app.use(express.static(path.join("./src/public")));

// 404 handler
app.use((req, res, next) => {
  res.status(404).render("404");
});

export default app;
