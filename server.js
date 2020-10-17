const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')
const path = require('path')

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

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

//listener
const port = process.env.PORT || 9000
app.listen(port, () => console.log(`Server Started in ${port}`))