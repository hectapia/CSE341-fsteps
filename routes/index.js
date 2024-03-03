const routes = require('express').Router();
const lesson1Controllers = require('../controllers/lesson1')

routes.get('/', lesson1Controllers.hectorRoute);
routes.get('/vero', lesson1Controllers.veroRoute);



module.exports = routes;

