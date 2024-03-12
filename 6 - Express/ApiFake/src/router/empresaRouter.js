const express = require('express');
const empresaController = require('../controllers/empresaController')
const router = express.Router();

router.get('/new', empresaController.getEmpresa)

module.exports = router;