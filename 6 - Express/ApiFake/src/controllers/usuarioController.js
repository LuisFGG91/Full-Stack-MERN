const Usuario = require('../models/usuario')
const Empresa = require('../models/empresa')

const usuarioController = {
    getUsuario: (req, res) => {
        const newUsuario = new Usuario();
        res.json({ status: "ok", data: { user: newUsuario } });
    },
    
    postUsuario: (req, res) => {
        const newUsuario = new Usuario();
        res.json({ status: "ok", data: { user: newUsuario } });
    },
    putUsuario: (req, res) => {
        const newUsuario = new Usuario();
        res.json({ status: "ok", data: { user: newUsuario } });
    },
    deleteUsuario: (req, res) => {
        const newUsuario = new Usuario();
        res.json({ status: "ok", data: { user: newUsuario } });
    },

    getUsuarioYEmpresa: (req, res) => {
        const newUsuario = new Usuario();
        const newEmpresa = new Empresa();
        res.json({ status: "ok", data: { user: newUsuario, company: newEmpresa } });
    }
};

module.exports = usuarioController;