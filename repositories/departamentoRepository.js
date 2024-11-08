const Departamento = require('../entities/Departamento');

const findAll = () => Departamento.findAll();
const findById = (id) => Departamento.findByPk(id);

module.exports = {
    findAll,
    findById
};
