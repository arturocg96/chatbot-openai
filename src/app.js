const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/apiRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use("/api", routes); // Todas las rutas estarán bajo el prefijo /api

module.exports = app;
