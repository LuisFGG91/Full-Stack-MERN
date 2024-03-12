const df = require('@faker-js/faker');
//Modelo
class Usuario {
    constructor() {
        this._id = df.simpleFaker.string.uuid();
        this.primerNombre = df.faker.person.firstName();
        this.numeroDeTelefono = df.faker.phone.number();
        this.apellido = df.faker.person.lastName();
        this.email = df.faker.internet.email();
        this.contraseña = df.faker.internet.password();
    }
}

module.exports = Usuario;