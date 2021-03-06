require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const path = require('path')

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

//CONTROLLERS
const authController = require('./controllers/authController')
const itemsController = require('./controllers/itemsController')
const levelsController = require('./controllers/levelsController')

//EXPRESS
const app = express()

app.use(express.static(__dirname + '/../build'))
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

//MASSIVE
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db)
    console.log('Database Connected')
    app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
})
.catch(err => console.log(err))

//ENDPOINTS
app.post('/auth/register', authController.register)
app.post('/auth/login', authController.login)
app.get('/auth/logout', authController.logout)

app.get('/api/items', itemsController.getItems)
app.get('/api/inventory', itemsController.getInventory)
app.post('/api/item', itemsController.addItem)
app.delete('/api/item', itemsController.deleteItem)

app.get('/api/levels/:username', levelsController.getLevels)
app.put('/api/levels/:levelId/:username', levelsController.updateLevel)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../build/index.html'))
})