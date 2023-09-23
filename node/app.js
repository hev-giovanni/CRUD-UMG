import express  from "express"
import cors from 'cors'

//importar la conexion a la DB
import db from "./database/db.js"

//ipmortamos nuestro enrutador
import blogRoutes from './routers/routes.js'

const app = express()

app.use (cors ())
app.use(express.json())
app.use('/blogs',blogRoutes)

try{
    await db.authenticate()
    console.log('Conexion Exitosa ala DB')
}
catch(error){
    console.log('El error de conexion es: ${error}')


}


/*
app.get('/',(req,res)=>{
    res.send('HOLA MUNDO')
})*/

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})