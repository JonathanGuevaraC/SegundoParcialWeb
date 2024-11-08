const empleadoService = require('../services/empleadoService');

exports.listarEmpleados = async (req, res) => {
    const empleados = await empleadoService.listarEmpleados();
    res.json(empleados);
};

exports.crearEmpleado = async (req, res) => {
    const empleado = await empleadoService.crearEmpleado(req.body);
    res.status(201).json(empleado);
};
