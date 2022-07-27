const express = require('express');
const routerApi = require('./routes/index');


const app = express();


const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// obtener el ano actual

app.use((req, res, next) =>{
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes'
    return next();
})

// app.use('/', router);


// habilitar pug 

app.set('view engine', 'pug');

// definir carpeta public 

app.use(express.static('public'));
app.use('/viajes', express.static('public'));


routerApi(app)


app.listen (port, () => {
    console.log(`servidor escuchando puerto: ${port}`)
})