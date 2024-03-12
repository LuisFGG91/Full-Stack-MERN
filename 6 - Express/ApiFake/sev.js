//Config - server
//const express = require('express');
//const app = express();
//const port = 8000;
//Config



//Config - server
const express = require('express');
const df = require('@faker-js/faker');
const app = express();
const port = 8000;


//Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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



//Controladores
const empresaController = {
    obtenerEmpresa: (req, res) => {
        const newEmpresa = new Empresa();
        res.json({ status: "ok", data: { company: newEmpresa } });
    }
};

const usuarioController = {
    obtenerUsuario: (req, res) => {
        const newUsuario = new Usuario();
        res.json({ status: "ok", data: { user: newUsuario } });
    },

    obtenerUsuarioYEmpresa: (req, res) => {
        const newUsuario = new Usuario();
        const newEmpresa = new Empresa();
        res.json({ status: "ok", data: { user: newUsuario, company: newEmpresa } });
    }
};

//Metodo Router Usuario / Empresa


app.get("/api/usuario/new", usuarioController.obtenerUsuario);
app.get("/api/empresa/new", empresaController.obtenerEmpresa);
app.get("/api/usuario/empresa", usuarioController.obtenerUsuarioYEmpresa);


const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
