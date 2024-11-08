const proyectoService = require('../services/proyectoService');

exports.listarProyectos = async (req, res) => {
    const proyectos = await proyectoService.listarProyectos();
    res.json(proyectos);
};

exports.buscarProyectoPorId = async (req, res) => {
    const proyecto = await proyectoService.buscarProyectoPorId(req.params.id);
    res.status(proyecto ? 200 : 404).json(proyecto);
};
