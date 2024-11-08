const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Departamento = require('./Departamento');

class Empleado extends Model {}

Empleado.init({
    nombre: DataTypes.STRING,
    salario: DataTypes.DOUBLE
}, { sequelize, modelName: 'empleado' });

Empleado.belongsTo(Departamento, { foreignKey: 'departamentoId' });
Departamento.hasMany(Empleado, { foreignKey: 'departamentoId' });

module.exports = Empleado;
