const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(1);
const correo = Joi.string().email();
const mensaje = Joi.string().min(1).max(100);



const createTestimonialSchema = Joi.object({
    nombre: nombre.required(),
    correo: correo.required(),
    mensaje: mensaje.required()
})




module.exports = {createTestimonialSchema}
