require('dotenv').config();
const app = require('./src/app.js')
const mongoose = require("mongoose");

// Conexion a la base de datos e inicio de servidor.

mongoose.connect(process.env.MONGODB_URL)
.then(app.listen(3000, () => console.log('Server Started')))
.catch((error)=>console.log(error))


