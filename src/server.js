require('dotenv').config()
const express = require('express')
const app = express()
const db = require("./config/db");
const cors = require('cors')

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
app.use(cors())

const produtosRoutes = require('../src/routes/produtos');

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use('/produtos', produtosRoutes);


app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})