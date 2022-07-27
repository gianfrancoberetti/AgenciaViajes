const express = require('express');

const inicioRouter = require('./inicio-router');
const nosotrosRouter = require('./nosotros-router')
const viajesRouter = require('./viajes-router');
const testimonialesRouter = require('./testimoniales-router');





function routerApi(app) {
    const router = express.Router();
    app.use('/', router)
    router.use('/inicio', inicioRouter);
    router.use('/nosotros', nosotrosRouter);
    router.use('/viajes', viajesRouter);
    router.use('/testimoniales', testimonialesRouter)
}

module.exports = routerApi