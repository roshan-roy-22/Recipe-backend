const express = require('express')
require('dotenv').config()
const cors = require('cors')
require('./Connection/db')
const router = require('./Routes/route')

const RecipeServer = express()
RecipeServer.use(cors())
RecipeServer.use(express.json())
RecipeServer.use(router)

const PORT = 3000 
RecipeServer.listen(PORT, () => {
    console.log(`Daily Cart Server Started at port : ${PORT}`);
})

RecipeServer.get('/', (req, res) => {
    res.send('<h1>Recipe Server Started...Waiting for Client Request!!!</h1>')
})
