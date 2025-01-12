# Chatbot 

## Descripción

Este proyecto es un ejemplo práctico de integración de un chatbot utilizando la API de OpenAI. Está diseñado para simular un guía turístico experto en la ciudad de León, España, generando respuestas detalladas sobre la historia, cultura, gastronomía y lugares turísticos de la ciudad.

El chatbot utiliza modelos avanzados de lenguaje (GPT-3.5 o GPT-4) y está construido en Node.js y Express. Este proyecto muestra cómo estructurar y configurar una aplicación modular y escalable para facilitar su integración en otras aplicaciones.

---

## Requisitos previos

- Tener Node.js instalado (versión 18 o superior recomendada).
- Una cuenta en OpenAI con una API Key válida.
- Un editor de texto o IDE como Visual Studio Code.

---

## Instalación

1. Clonar el repositorio en tu máquina local.
2. Navegar al directorio del proyecto.
3. Instalar las dependencias necesarias.

---

## Configuración

1. Crear un archivo `.env` en la raíz del proyecto y añadir la API Key de OpenAI y el puerto.
2. Asegurarse de que el archivo `.env` no esté expuesto públicamente añadiéndolo al archivo `.gitignore`.

---

## Uso

1. Iniciar el servidor en modo desarrollo o producción.
2. Probar el chatbot enviando solicitudes POST al endpoint `/api/chat` para obtener respuestas detalladas.

---

## Estructura del Proyecto

```plaintext
chatbot-turismo-leon/
├── src/
│   ├── controllers/
│   │   └── chatController.js    # Controlador para manejar solicitudes al chatbot
│   ├── routes/
│   │   ├── apiRoutes/
│   │   │   └── chatRoutes.js    # Rutas específicas del chatbot
│   │   └── apiRoutes.js         # Archivo centralizador de rutas
│   ├── services/
│   │   └── openaiService.js     # Lógica para interactuar con la API de OpenAI
│   ├── utils/
│   │   └── logger.js            # Logger para depuración
│   ├── app.js                   # Configuración de la aplicación Express
├── .env                         # Variables de entorno (clave OpenAI, puerto, etc.)
├── .gitignore                   # Archivos/carpetas a ignorar por Git
├── package.json                 # Configuración del proyecto y dependencias
├── index.js                     # Punto de entrada principal
└── README.md                    # Documentación del proyecto
```
---

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript en el servidor.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **Axios**: Librería para realizar solicitudes HTTP hacia la API de OpenAI.
- **dotenv**: Manejo de variables de entorno.
- **nodemon**: Herramienta para desarrollo que reinicia el servidor automáticamente en caso de cambios.

---

## Casos de Uso

Este ejemplo puede ser útil para:

- Guías turísticos para otras ciudades.
- Chatbots de atención al cliente.
- Sistemas de soporte para preguntas frecuentes (FAQs).
- Integraciones en aplicaciones web o móviles.

---

## Próximos Pasos

- Añadir más rutas o funcionalidades, como rutas para registrar usuarios o manejar preferencias de búsqueda.
- Mejorar la validación y manejo de errores para asegurar la robustez del sistema.
- Implementar autenticación si el chatbot debe ser usado por usuarios registrados.

---

## Contribución

Si deseas contribuir a este proyecto:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad (por ejemplo, `feature/nueva-funcionalidad`).
3. Envía un pull request con tus cambios.

---

## Licencia

Este proyecto está bajo la licencia MIT. Puedes consultar más detalles en el archivo `LICENSE`.

---

## Nota Final

Este proyecto es un ejemplo práctico para integrar un chatbot en una aplicación Node.js. Puede servir como base para proyectos más grandes o adaptarse a necesidades específicas. Si necesitas ayuda o deseas expandir las funcionalidades, no dudes en contribuir o solicitar soporte.

