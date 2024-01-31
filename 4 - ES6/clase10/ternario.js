let canAfford = (itemPrice, AccountBalance) => {
    if (itemPrice > AccountBalance) {
        return `Cannot Afford! You are $ ${itemPrice - AccountBalance} short`
    }
    else {
        return "Can Afford!"
    }
}



console.log(canAfford(100, 1000))


let canAffordTernaria = (itemPrice, AccountBalance) => {
return itemPrice > AccountBalance
    ? `Cannot Afford! You are $ ${itemPrice - AccountBalance} short`
    : "Can Afford!"

}



console.log(canAffordTernaria(100, 1000))



let edad = 16;

let mensaje = 
edad >= 18 
? "Eres Mayor de edad" 
: (edad >= 16 
    ? "Eres menor de edad "
    : (edad >= 15
        ? "Eres un niño de 15"
        : "Eres un niño")
    )

console.log(mensaje)


-Alumnos
-Aulas
-Patio
-Casino 
-Profesores
Pizarron
Sillas
asignaturas
-Auxiliares 

PERSONAS
    nombre
    apellido
    fecha_nacimiento
    numero_contacto
    rut/DNI
    email
    TIPOPERSONA
    #ToStringFullName
    {
        return nombre + apellido
    }
    #ToStringEdad
    {
        return now() - fecha_nacimiento
    }


TIPOPERSONA
    1 = Alumnos
    2 = Profesores
    3 = Auxiliares





UBICACIONES
    -Aulas
    -Patio
    -Casino

INMOVILIARIO
    -Sillas
    -Pizarron
    -Mesas

ASIGNATURAS
    -Castellano
    -Matematica
    -Fundamentos de la web


