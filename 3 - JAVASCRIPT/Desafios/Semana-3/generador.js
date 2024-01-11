/**
 * Genera una contraseña aleatoria según los parámetros especificados.
 * @param {number} longitud - Longitud de la contraseña (entre 8 y 16 caracteres).
 * @param {boolean} incluirMayusculas - Indica si la contraseña debe incluir letras mayúsculas.
 * @param {boolean} incluirNumeros - Indica si la contraseña debe incluir números.
 * @param {boolean} incluirSimbolos - Indica si la contraseña debe incluir caracteres especiales.
 * @returns {string} - Contraseña generada.
 */
const generarContrasena = (longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) => {
    const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresNumeros = '0123456789';
    const caracteresSimbolos = '!@#$%^&*()_-+=<>?';

    let caracteresPermitidos = caracteresMinusculas;

    if (incluirMayusculas) {
        caracteresPermitidos += caracteresMayusculas;
    }

    if (incluirNumeros) {
        caracteresPermitidos += caracteresNumeros;
    }

    if (incluirSimbolos) {
        caracteresPermitidos += caracteresSimbolos;
    }

    let contrasenaGenerada = '';
    const caracteresTotales = caracteresPermitidos.length;

    for (let i = 0; i < longitud; i++) {
        const indiceCaracter = Math.floor(Math.random() * caracteresTotales);
        contrasenaGenerada += caracteresPermitidos.charAt(indiceCaracter);
    }

    return contrasenaGenerada;
};

// Ejemplo de uso
const contrasenaGenerada = generarContrasena(12, true, true, true);
const contrasenaGenerada1 = generarContrasena(12, true, true, true);
const contrasenaGenerada2 = generarContrasena(12, true, true, true);
const contrasenaGenerada3 = generarContrasena(12, true, true, true);
const contrasenaGenerada4 = generarContrasena(12, true, true, true);
const contrasenaGenerada5 = generarContrasena(12, true, true, true);

console.log(contrasenaGenerada);
console.log(contrasenaGenerada1);
console.log(contrasenaGenerada2);
console.log(contrasenaGenerada3);
console.log(contrasenaGenerada4);
console.log(contrasenaGenerada5);
