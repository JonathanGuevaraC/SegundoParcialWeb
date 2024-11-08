const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Proyecto extends Model {}

Proyecto.init({
    nombre: DataTypes.STRING
}, { sequelize, modelName: 'proyecto' });

module.exports = Proyecto;
