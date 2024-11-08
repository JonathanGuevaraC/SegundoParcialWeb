const proyectoRepository = require('../repositories/proyectoRepository');

const listarProyectos = () => proyectoRepository.findAll();
const buscarProyectoPorId = (id) => proyectoRepository.findById(id);

module.exports = {
    listarProyectos,
    buscarProyectoPorId
};
