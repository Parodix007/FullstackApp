'use strict'

// Potrzebne narzedzia do serwera
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')


// Widoki
const { Startujacy } = require('./Functions/displayOptions')
const { checkID } = require('./Functions/voute')
const { makeVoute } = require('./Functions/makeVoute')



// Włączenie narzedzi do serwera
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use('/public', express.static(__dirname + '/public'))
app.use(cors())


// Ustawienie routingu
app.get('/', Startujacy)
app.post('/validateID?:userID', checkID)
app.post('/makeVoute', makeVoute)
//app.get('/wyniki', Wyniki)
app.get('*', (req, res) => res.send('Zle trafiles') )

//Wlaczenie serwera
app.listen(2000, () => console.log("Server is running!"))

