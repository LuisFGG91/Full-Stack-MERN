const express = require('express')

const usuarioRouter = require('./router/usuarioRoutes')
const empresaRouter = require('./router/empresaRouter')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/usuario',usuarioRouter);
app.use('/api/empresa',empresaRouter);

module.exports = app; 