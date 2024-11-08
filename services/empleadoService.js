const empleadoRepository = require('../repositories/empleadoRepository');
const empleadoProyectoRepository = require('../repositories/empleadoProyectoRepository');

const listarEmpleados = () => empleadoRepository.findAll();
const buscarEmpleadoPorId = (id) => empleadoRepository.findById(id);
const crearEmpleado = (data) => empleadoRepository.create(data);

module.exports = {
    listarEmpleados,
    buscarEmpleadoPorId,
    crearEmpleado
};
