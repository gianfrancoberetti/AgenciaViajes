const {models} = require('../libs/sequelize')
const {viajeSchema, Viaje} = require('./../db/models/viajes.model');


class ViajeController {
    constructor() {}

    async find(){
        const rta = await models.Viaje.findAll();
        return rta
    }

    async findOne(slug){
        const rta = await models.Viaje.findOne({where: {slug}})
        return rta
    }


}


module.exports = ViajeController