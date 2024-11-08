const Empleado = require('../entities/empleado');

const findAll = () => Empleado.findAll();
const findById = (id) => Empleado.findByPk(id);
const create = (data) => Empleado.create(data);

module.exports = {
    findAll,
    findById,
    create
};
