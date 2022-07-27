const { viajeSchema, Viaje} = require('./viajes.model');
const { testimonialesSchema, Testimonial} = require('./testimoniales.model');


function setupModels(sequelize){
    Viaje.init(viajeSchema, Viaje.config(sequelize));
    Testimonial.init(testimonialesSchema, Testimonial.config(sequelize));

}

module.exports = setupModels