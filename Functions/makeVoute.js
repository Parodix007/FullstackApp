module.exports = {
    makeVoute: (req,res) => {
        const db = require('./dbconn')
        const query = `INSERT INTO glosy (user, glos) VALUES (${db.escape(req.body.id)}, ${db.escape(req.body.option)})`
        db.query(query, (err) => err ? res.send(err) : false)
        res.render('makeVoute')
    }
}