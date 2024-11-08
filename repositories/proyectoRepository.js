const Proyecto = require('../entities/Proyecto');

const findAll = () => Proyecto.findAll();
const findById = (id) => Proyecto.findByPk(id);

module.exports = {
    findAll,
    findById
};
