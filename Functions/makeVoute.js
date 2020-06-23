module.exports = {
    makeVoute: (req,res) => {
        const db = require('./dbconn')
        const query = `INSERT INTO glosy (user, glos) VALUES (${db.escape(req.body.id)}, ${db.escape(req.body.option)})`
        db.query(query, (err) => err ? new Error(err) : false)
        res.send(`<div class="notification is-success">Dziekujemy za oddanie glosu</div>`)
    }
}