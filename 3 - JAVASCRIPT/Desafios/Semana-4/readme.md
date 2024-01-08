# Explorando Commits con JavaScript

## Descripción

En esta actividad, el objetivo es crear una función en JavaScript que interactúe con la API de GitHub para obtener información sobre los últimos 10 commits de un repositorio específico. Se utilizará la biblioteca `node-fetch` para realizar solicitudes HTTP y recuperar datos de la API de GitHub.

## Pasos

1. **Configuración Inicial:**
   - Asegúrate de tener Node.js instalado en tu entorno de desarrollo.
   - Crea un nuevo proyecto de Node.js o utiliza uno existente.

2. **Instalación de Dependencias:**
   - Instala la biblioteca `node-fetch` ejecutando el siguiente comando en tu terminal:
     ```bash
     npm install node-fetch
     ```

3. **Desarrollo de la Función:**
   - Escribe una función llamada `getLatestCommits` que realice una solicitud a la API de GitHub para obtener los últimos 10 commits de un repositorio específico.
   - Utiliza `node-fetch` para realizar la solicitud. La URL de la API debe construirse dinámicamente con el nombre del propietario del repositorio y el nombre del repositorio.
   - La función debe mostrar la siguiente información para cada commit:
     - Hash
     - Autor
     - Mensaje
     - Fecha y hora

4. **Pruebas y Ejecución:**
   - Ejecuta tu función y verifica que pueda recuperar la información correctamente.
   - Asegúrate de haber reemplazado las variables `repositoryOwner` y `repositoryName` con los valores correspondientes para el repositorio que estás explorando.

5. **Documentación:**
   - Documenta tu código para que otros puedan entender fácilmente cómo funciona tu función.
   - Incluye comentarios explicativos y una breve descripción de la función.

6. **Reflexión:**
   - Escribe una breve reflexión sobre tu experiencia trabajando con la API de GitHub, el manejo de datos JSON y el desarrollo en JavaScript.
   - ¿Qué desafíos enfrentaste y cómo los superaste?

## Recursos

- [Documentación de la API de GitHub](https://docs.github.com/en/rest)
- [Documentación de `node-fetch` en GitHub](https://github.com/node-fetch/node-fetch)

¡Disfruta explorando los commits de un repositorio y mejorando tus habilidades en desarrollo web con JavaScript!

Carga este archivo en un repositorio (puedes utilizar el mismo repositorio que ya has creado para el curso ) PRIVADO de GitHub y Brindame acceso UserGitHub : LuisFGG91 

¡Buena suerte con la actividad!