// Importa la función getChatResponse desde el servicio de OpenAI
// Esta función se encarga de interactuar con la API de OpenAI para generar respuestas.
const { getChatResponse } = require("../services/openaiService");

// Define el controlador para manejar solicitudes relacionadas con el chatbot
// Este controlador es responsable de procesar los mensajes enviados por los usuarios
// y devolver las respuestas generadas por OpenAI.
const chatController = async (req, res) => {
    // Extrae el mensaje enviado por el cliente desde el cuerpo de la solicitud
    const { message } = req.body;

    // Valida que el mensaje no esté vacío
    // Si el mensaje no está presente, se responde con un error 400 (Bad Request).
    if (!message) {
        return res.status(400).json({ error: "El mensaje es obligatorio." });
    }

    try {
        // Llama al servicio de OpenAI para obtener una respuesta al mensaje proporcionado
        const response = await getChatResponse(message);

        // Devuelve la respuesta generada por OpenAI en formato JSON
        res.json({ reply: response });
    } catch (error) {
        // Maneja errores que puedan ocurrir durante la llamada al servicio de OpenAI
        // Registra el error en la consola para fines de depuración
        console.error("Error en el controlador del chatbot:", error.message);

        // Responde con un error 500 (Internal Server Error) indicando que hubo un problema
        // al procesar la solicitud.
        res.status(500).json({ error: "Error al procesar tu mensaje." });
    }
};

// Exporta el controlador para que pueda ser utilizado en las rutas del chatbot
module.exports = { chatController };
