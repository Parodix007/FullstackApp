//Uzupełnic funkcje ktora bedzie w odpowiedzi na sprawdzenie ID uzytkownika jsona z osobami ktore moga glosowac, trzeba zrobic tego JSONA!!!!!!

const express = require('express')
const app = express()
const mysql = require('mysql')
const conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database: 'FullstackApp'
})
const body = require('body-parser')


const checkId = (id) => {

}


app.set('view engine', 'ejs')
app.use(body.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('main')
})

app.get('/checkId', (req, res) => {
	res.redirect('/')
	return checkId(req.body.id)
})

app.listen(2000, () => console.log("Server is running!"))

