const express = require('express')      // requerimos la librería express
const app = express()                   // inicializamos express

const path = require('path')    // módulo de Node para adquirir el 'path'


const morgan = require('morgan')    // requerimos la librería 'morgan'  
app.use( morgan('dev') )            // inicializamos 'morgan' para observar peticiones al servidor


// indicamos a Node que cuando envíen datos desde un request como lo es un body lo reconozca como json
app.use( express.json() )
app.use( express.urlencoded({ extended: false }) )


app.use( require('./routes/index') )    // aquí es solo usar la las rutas, para importarlas todas


// Definimos la carpeta estática para que cualquier cliente pueda acceder a ella directamente
// Metodo 'static' junto con el modulo de 'path' para hubicar la carpeta
app.use( express.static( path.join( __dirname, 'public' ) ) ) 



module.exports = app