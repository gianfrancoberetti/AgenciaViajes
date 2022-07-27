const {models} = require('../libs/sequelize')
const {testimonialesSchema, Testimonial} = require('./../db/models/testimoniales.model');
const express = require('express');


class TestimonialService{
    constructor() {}

    async find(){
        const rta = await models.Testimonial.findAll();
        return rta
    }

    async create(data){
        const newTestimonial = await models.Testimonial.create(data)
    }
}

const service  = new TestimonialService();


const guardarTestimonial = async (req,res,next) => {
    const {nombre, correo, mensaje} = req.body
    console.log(req.body);
    const testimoniales = await service.find();

    const errores = []

    if(nombre.trim() === ''){
        errores.push({mensaje: 'el nombre ta vacio'})
    }
    if(correo.trim() === ''){
        errores.push({mensaje:'el correo ta vacio'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'el mensaje ta vacio'})
    }
    console.log(errores)
    if(errores.length > 0){
        try{
            res.render('testimoniales',{
            pagina: 'comentarios',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
        }catch(error){
            console.error(error)
        }
    }else {
        try {
            const mensajeTestimonial = await service.create({nombre,correo,mensaje});
            res.redirect('/testimoniales')
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = {TestimonialService, guardarTestimonial}