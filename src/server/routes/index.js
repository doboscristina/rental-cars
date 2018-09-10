const Express = require('express');

const app = Express.Router();

const Api = require('./Api');

Api.route(app);

module.exports = app;
