const boom = require('@hapi/boom')

function validatorHandler(schema, property) {
    return (req, res) => {
        const data = req[property]

        const {error} = schema.validate(data);
        if (error){
            res.render('testimoniales',{
            error: boom.badRequest(error)});
        }
    }
}


module.exports = validatorHandler