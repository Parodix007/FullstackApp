module.exports = {
    Startujacy: (req,res) => {
        const conn = require('./dbconn')
        const query = "SELECT * FROM startujacy"
        conn.query(query, (err, row) => {
            err ? new Error(err) : false
    
            res.render('main', {
                dane: [...row],
                vote: undefined
            })
        })
    }
}