const express = require('express');
const usuarioController = require('../controllers/usuarioController')
const router = express.Router();

router.get('/new', usuarioController.getUsuario);
router.post('/:id', usuarioController.postUsuario);
router.put('/:id', usuarioController.putUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

router.get('/empresa', usuarioController.getUsuarioYEmpresa);


module.exports = router;