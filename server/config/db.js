const mongoose = require('mongoose');

const dbURI = 
'mongodb+srv://Craken:Craken420@cluster0-taurp.mongodb.net/test?retryWrites=true';

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true 
}

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Conexion a la base de datos establecida")
    },
    err => {
        console.log('Error en la conexion: ', err);
    }
);

//Para requerir cualquier modelo
require("../models/Usuario")