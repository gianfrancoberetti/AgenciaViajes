
const {viajeSchema, Viaje} = require('../db/models/viajes.model');
const ViajeController = require('./../controllers/viajes-controller');

const service = new ViajeController();


const express = require('express');

const router = express.Router()

router.get('/', async (req, res, next) => {

  const viajes = await service.find({limit: 3})
  console.log(viajes)
  try {
    res.render('inicio', {
        pagina: 'inicio',
        clase: 'home',
        viajes
    });
  } catch (error) {
      next(error)
  }
});



module.exports = router