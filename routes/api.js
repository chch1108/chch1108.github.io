var express = require('express');
var router = express.Router();


const sqlite = require('sqlite3').verbose();
db = new sqlite.Database("./db.sqlite", sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

router.post('/', (req, res) => {
    const {movie, quote, character}=req.body;
    sql = "INSERT INTO quote (movie, quote, character) VALUES (?, ?, ?)";
    db.run(sql, [movie, quote, character], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send(err.message);
        }
        console.log('inserted');
    });
    //res.redirect('/data.html');
    return res.status(200).send('inserted');
})

module.exports = router;
