const df = require('@faker-js/faker');

class Empresa {
    constructor() {
        this._id = df.simpleFaker.string.uuid();
        this.nombre = df.faker.company.name();
        this.direccion = {
            calle: df.faker.location.direction(),
            ciudad: df.faker.location.city(),
            estado: df.faker.location.state(),
            codigoPostal: df.faker.location.zipCode(),
            pais: df.faker.location.country()
        }
    }
}

module.exports = Empresa;