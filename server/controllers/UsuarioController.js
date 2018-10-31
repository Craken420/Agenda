const Usuario = require("../models/Usuario");

exports.listaTodosUsuarios = (req, res) => {
    Usuario.find({}, (err, usuario) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(usuario);
    });
}

exports.crearNuevoUsuario = (req, res) =>{
    let nuevoUsuario = new Usuario(req.body);
    nuevoUsuario.save((err, usuario) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(usuario);
    });
}

exports.leerUsuario = (req, res) => {
    Usuario.findById(req.params.usuarioid, (err, usuario) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(usuario);
    });
};

exports.actualizarUsuario = (req, res) => {
    Usuario.findOneAndUpdate(
        { _id: req.params.usuarioid },
        req.body,
        { new: true },
        (err, usuario) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(usuario);
        }
  );
};

exports.eliminarUsuario = (req, res) => {
    Usuario.remove(
        { _id: req.params.usuarioid }, (err, usuario) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json({ message: "Usuario eliminado exitosamente"})
    });
};