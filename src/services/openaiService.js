// Importa el módulo axios para realizar solicitudes HTTP
// Este módulo será utilizado para interactuar con la API de OpenAI.
const axios = require("axios");

// Define la URL base para acceder al endpoint de la API de OpenAI
// Este endpoint maneja las solicitudes de chat y genera respuestas basadas en el modelo especificado.
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

/**
 * Función asíncrona para interactuar con la API de OpenAI
 * 
 * Esta función toma un mensaje como entrada, lo envía al modelo GPT de OpenAI y
 * devuelve la respuesta generada. La comunicación se realiza mediante una solicitud
 * POST a la URL de la API de OpenAI.
 * 
 * @param {string} message - El mensaje enviado por el usuario.
 * @returns {Promise<string>} - La respuesta generada por OpenAI.
 */
const getChatResponse = async (message) => {
    try {
        // Configura los encabezados de la solicitud HTTP
        // Incluye el tipo de contenido y la clave API necesaria para la autenticación.
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Clave API cargada desde las variables de entorno (.env)
        };

        // Construye el cuerpo de la solicitud con los parámetros necesarios
        const requestBody = {
            model: "gpt-3.5-turbo", // Modelo de OpenAI utilizado para generar la respuesta
            messages: [
                {
                    role: "system",
                    content:
                        "Eres el mejor guía turístico de León, España. Proporciona respuestas detalladas sobre la historia, cultura, gastronomía y lugares turísticos.",
                },
                { role: "user", content: message }, // Mensaje enviado por el usuario
            ],
            temperature: 0.2, // Controla la creatividad de las respuestas generadas (0 = determinista, 1 = más creativo)
        };

        // Realiza la solicitud POST a la API de OpenAI con axios
        const response = await axios.post(OPENAI_API_URL, requestBody, { headers });

        // Extrae y devuelve el contenido del mensaje generado por OpenAI
        return response.data.choices[0].message.content;
    } catch (error) {
        // Captura errores durante la solicitud a la API de OpenAI
        // Registra el error en la consola para fines de depuración
        console.error("Error al interactuar con OpenAI:", error.response?.data || error.message);

        // Lanza un error para notificar al controlador que la solicitud falló
        throw new Error("Error al procesar tu solicitud con OpenAI.");
    }
};

// Exporta la función para que pueda ser utilizada en otros módulos
// Por ejemplo, se usará en el controlador del chatbot.
module.exports = { getChatResponse };
