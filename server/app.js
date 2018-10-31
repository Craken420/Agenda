const express = require('express');
const bodyParser = require('body-parser');
const usuarioController = require('./controllers/UsuarioController');

//NEW CRUD
const cors = require('cors')
const morgan = require('morgan')

//instancia de la bd para la conexion
require("./config/db");
const app = express();

//NEW CRUD
app.use(morgan('combined'))
app.use(cors())


const port = process.env.PORT || 8081;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API ENDPOINTS
app 
    .route('/usuarios')
    .get(usuarioController.listaTodosUsuarios)
    .post(usuarioController.crearNuevoUsuario);

app 
    .route("/usuarios/:usuarioid")
    .get(usuarioController.leerUsuario)
    .put(usuarioController.actualizarUsuario)
    .delete(usuarioController.eliminarUsuario);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})