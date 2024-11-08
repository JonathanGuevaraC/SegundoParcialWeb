const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Empleado = require('./empleado');
const Proyecto = require('./Proyecto');

class EmpleadoProyecto extends Model {}

EmpleadoProyecto.init({
    rol: DataTypes.STRING
}, { sequelize, modelName: 'empleadoProyecto' });

Empleado.belongsToMany(Proyecto, { through: EmpleadoProyecto });
Proyecto.belongsToMany(Empleado, { through: EmpleadoProyecto });

module.exports = EmpleadoProyecto;
