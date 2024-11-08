const EmpleadoProyecto = require('../entities/empleadoProyecto');

const create = (data) => EmpleadoProyecto.create(data);
const findByProyectoId = (proyectoId) => 
    EmpleadoProyecto.findAll({ where: { proyectoId } });

module.exports = {
    create,
    findByProyectoId
};
