const catchError = require("../utils/catchError");
const User = require("../models/User");
const { where } = require("sequelize");

//! Obtener todos los usuarios
const getAll = catchError(async (req, res) => {
  // Operaciones...
  const users = await User.findAll();
  return res.json(users);
});

//! Crear un usuario
const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    birthday,
  });
  return res.status(201).json(user);
});
//! Obtener un usuaruio por el N° de ID
const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  return res.json(user);
});
//! Eliminar un usuario por N° de ID
const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.destroy({ where: { id } });
  return res.sendStatus(204);
});
//! Actualizar datos de un usuario por el N° de ID
const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.update(
    { first_name, last_name, email, password, birthday },
    { where: { id }, returning: true }
  );
  return res.json(user[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};
