const { Router } = require('express')       // requerimos librería express
const router = Router()                     // inicializamos las rutas


const { db } = require('../firebase')    // donde controlamos firebase


router.get('/contactos', async (req, res)=>{

    const resultado = await db.collection('contacts').get()    // consultando los datos que están en firebase

    // console.log( resultado.docs[0].data() )   // del primer elemento del array, traigame los datos

    // Recorrer todos los documentos y devolverlos en un array
    const contacts = resultado.docs.map( doc => ({
        id: doc.id,
        ...doc.data()
    }) )

    console.log( contacts )

    res.send('<h3>HOLA CONTACTOS</h3>')
})



router.post('/nuevo-contacto', async (req, res) => {

    // recibimos los datos que llegan desde el body
    const { firstname, lastname, email, phone } = req.body

    // Agregamos el nuevo contacto en firebase
    const insertado = await db.collection('contacts').add({
        firstname: firstname,
        lastname:  lastname,
        email:     email,
        phone:     phone
    })

    // console.log(insertado._path)

    res.send('<h3>Nuevo contacto creado</h3>')

})



module.exports = router