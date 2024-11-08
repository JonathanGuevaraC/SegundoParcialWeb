const departamentoRepository = require('../repositories/departamentoRepository');
const empleadoRepository = require('../repositories/empleadoRepository');

const listarDepartamentos = () => departamentoRepository.findAll();
const buscarDepartamentoPorId = (id) => departamentoRepository.findById(id);

module.exports = {
    listarDepartamentos,
    buscarDepartamentoPorId
};
