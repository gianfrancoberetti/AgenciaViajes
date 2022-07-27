const express = require('express');

const router = express.Router();

const {TestimonialService, guardarTestimonial} = require('./../controllers/testimoniales-controller')
const { createTestimonialSchema } = require('./../schema/testimonial.schema');

const service  = new TestimonialService();

router.get('/', async (req, res, next) => {
    const testimoniales = await service.find();

    try {
        res.render('testimoniales',{
        pagina: 'Comentarios',
        testimoniales})
    } catch (error) {
        
    }
})

router.post('/', guardarTestimonial )


module.exports = router