```markdown
# Generador de Contraseñas Aleatorias en JavaScript

Tu tarea es crear un programa en JavaScript que sea capaz de generar contraseñas de forma aleatoria, permitiendo configurar diferentes parámetros. La función debe cumplir con los siguientes requisitos:

## 1. Longitud de la Contraseña
- La longitud de la contraseña debe ser configurable y debe estar en el rango de 8 a 16 caracteres.

## 2. Inclusión de Caracteres Especiales
- Debe ser posible configurar si la contraseña debe incluir caracteres especiales, como: `! @ # $ % ^ & * ( ) _ - + = < > ?`

## 3. Inclusión de Números
- Debe ser posible configurar si la contraseña debe incluir números del 0 al 9.

## 4. Inclusión de Letras Mayúsculas
- Debe ser posible configurar si la contraseña debe incluir letras mayúsculas del alfabeto.

Implementa la función `generarContrasena` que acepta los siguientes parámetros:

```javascript
/**
 * Genera una contraseña aleatoria según los parámetros especificados.
 * @param {number} longitud - Longitud de la contraseña (entre 8 y 16 caracteres).
 * @param {boolean} incluirMayusculas - Indica si la contraseña debe incluir letras mayúsculas.
 * @param {boolean} incluirNumeros - Indica si la contraseña debe incluir números.
 * @param {boolean} incluirSimbolos - Indica si la contraseña debe incluir caracteres especiales.
 * @returns {string} - Contraseña generada.
 */
const generarContrasena = (longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) => {
    // Implementa la lógica de generación de contraseñas aquí.
};
```

### Ejemplo de Uso:

```javascript
const contrasenaGenerada = generarContrasena(12, true, true, true);
console.log(contrasenaGenerada);
```

Asegúrate de probar tu función con diferentes combinaciones de parámetros para garantizar su correcto funcionamiento.

¡Buena suerte!

### Archivo JavaScript y Evidencia:

Crea un archivo JavaScript (generadorContrasenas.js) que contenga tu implementación. Además, debes proporcionar evidencia de la generación de al menos 10 contraseñas. Incluye una imagen en este README.md que muestre la salida del programa con las contraseñas generadas.

Carga este archivo en un repositorio PRIVADO de GitHub y Brindame acceso UserGitHub : LuisFGG91 