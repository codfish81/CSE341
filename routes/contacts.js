const routes = require('express').Router();

const myController = require('../controllers/index');

routes.get('/', myController.getAll);
routes.get('/:id', myController.getSingle);

module.exports = routes;