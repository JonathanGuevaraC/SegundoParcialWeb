const departamentoService = require('../services/departamentoService');

exports.listarDepartamentos = async (req, res) => {
    const departamentos = await departamentoService.listarDepartamentos();
    res.json(departamentos);
};

exports.buscarDepartamentoPorId = async (req, res) => {
    const departamento = await departamentoService.buscarDepartamentoPorId(req.params.id);
    res.status(departamento ? 200 : 404).json(departamento);
};
