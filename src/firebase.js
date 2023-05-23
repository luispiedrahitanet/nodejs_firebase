require('dotenv').config()

// Usamos el modulo de firebase
const { initializeApp, applicationDefault } = require('firebase-admin/app')
// initializeApp:       Inicializa la aplicación del sdk de firebase
// applicationDefault:  Busca la variable de entorno "GOOGLE_APPLICATION_CREDENTIALS"


// Utilizamos los servicioes de firebase llamada "firestore"
const {getFirestore} = require('firebase-admin/firestore')


// Configuramos el módulo de firebase
initializeApp({
    credential: applicationDefault()  // ejecuta la cadena de conexion automáticamente desde env
})


// Creamos el objeto de conexión de la base de datos
const db = getFirestore()

module.exports = {
    db
}
