const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')

const itemsRoute = require('./routes/api/items')

env.config()

//app config
const app = express()

//middleware
app.use(express.json())

//DB config
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err))

//routes
app.use('/api/items', itemsRoute)


//listener
const port = process.env.PORT || 9000
app.listen(port, () => console.log(`Server Started in ${port}`))