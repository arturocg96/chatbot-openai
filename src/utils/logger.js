/**
 * Función para registrar mensajes en la consola con un formato estándar.
 * 
 * Este logger permite registrar mensajes con una marca de tiempo (timestamp),
 * un nivel de severidad y el contenido del mensaje. Es útil para depuración
 * y para monitorear el estado de la aplicación.
 * 
 * @param {string} message - El mensaje que será registrado.
 * @param {string} [level="info"] - El nivel de severidad del mensaje (por defecto, "info").
 *        Niveles comunes: "info", "warn", "error", "debug".
 */
const logger = (message, level = "info") => {
    // Obtiene la fecha y hora actual en formato ISO 8601
    const timestamp = new Date().toISOString();

    // Imprime el mensaje en la consola con el formato:
    // [TIMESTAMP] [NIVEL]: MENSAJE
    console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
};

// Exporta la función para que pueda ser utilizada en otros módulos.
// Este logger puede ser usado en controladores, servicios u otras partes de la aplicación.
module.exports = logger;
