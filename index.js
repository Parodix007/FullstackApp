const express = require('express')
const app = express()
const body = require('body-parser')
const { Startujacy } = require('./Functions/displayOptions')

app.set('view engine', 'ejs')
app.use(body.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', Startujacy)

app.get('/checkId', (req, res) => {
	res.redirect('/')
	return checkId(req.body.id)
})

app.listen(2000, () => console.log("Server is running!"))

