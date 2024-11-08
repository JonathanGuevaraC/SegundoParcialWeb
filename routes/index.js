const express = require('express');
const empleadoController = require('../controllers/empleadoController');
const departamentoController = require('../controllers/departamentoController');
const proyectoController = require('../controllers/proyectoController');

const router = express.Router();

router.get('/empleados', empleadoController.listarEmpleados);
router.post('/empleados', empleadoController.crearEmpleado);

router.get('/departamentos', departamentoController.listarDepartamentos);
router.get('/departamentos/:id', departamentoController.buscarDepartamentoPorId);

router.get('/proyectos', proyectoController.listarProyectos);
router.get('/proyectos/:id', proyectoController.buscarProyectoPorId);

module.exports = router;
