const Empresa = require('../models/empresa')

const empresaController = {
    getEmpresa: (req, res) => {
        const newEmpresa = new Empresa();
        res.json({ status: "ok", data: { company: newEmpresa } });
    }

};

module.exports = empresaController;
