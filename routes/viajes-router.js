const express = require('express');

const router = express.Router()


// const {models} = require('../libs/sequelize')
const {viajeSchema, Viaje} = require('../db/models/viajes.model');
const ViajeController = require('./../controllers/viajes-controller');

const service = new ViajeController();




router.get('/', async (req, res, next) => {
    const viajes = await service.find();
    try {
        res.render('viajes', {
            pagina: 'viajes',
            viajes
        })
    } catch (error) {
        next(error)
    }
});


router.get('/:slug', async(req, res, next) => {
    const {slug} = req.params;
    try {
        const viaje = await service.findOne(slug);
        res.render('viaje', {
        pagina: 'informacion viajes',
        viaje
        });
    } catch (error) {
        next(error)
    }
})


module.exports = router