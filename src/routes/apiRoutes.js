const express = require("express");
const chatRoutes = require("./apiRoutes/chatRoutes");

const router = express.Router();

// Registrar las rutas del chatbot
router.use(chatRoutes); // Usa directamente las rutas del chatbot

// Puedes añadir más rutas aquí
// router.use("/users", userRoutes);

module.exports = router;
