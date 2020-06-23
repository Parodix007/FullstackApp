module.exports = {
    checkID: (req, res) => {
        const db = require('./dbconn')
        const kwerenda = 'SELECT * FROM allows'

        db.query(kwerenda, (err, row) => {
            err ? new Error(err) : false
            
            const user = req.query.userID
            const response = row.filter( ( { id_usera } ) => id_usera === user)
    
            res.json({allow:response})
        })
    }
}