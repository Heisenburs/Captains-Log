require('dotenv').config()
const express = require('express')

const connectToDb = require('./config/database')
const app = express()

//* Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

//* Middleware
app.use((req, res, next) => {
    console.log(req.body);
    console.log('I run for all the routes')
    next();
    //? next() - ensures that the request continues to be processed and that you get a response
})

app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.send(`<h1>Captain's Log</h1>`)
})

app.listen(5000, () => {
    console.log(`Port 5000: Listening...`);
    connectToDb();
})