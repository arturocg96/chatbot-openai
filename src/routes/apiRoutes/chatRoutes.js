const express = require("express");
const { chatController } = require("../../controllers/chatController");

const router = express.Router();

// Ruta para manejar las solicitudes del chatbot
router.post("/chat", chatController);

module.exports = router;
