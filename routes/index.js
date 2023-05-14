var express = require('express');
var router = express.Router();

sqlite = require('sqlite3').verbose();
db = new sqlite.Database("./db.sqlite", sqlite.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

router.post('/', (req, res) => {
  const {year, month, price}=req.body;
  sql = 'INSERT INTO quote (year, month, price) VALUES (?, ?, ?)';
  db.run(sql, [year, month, price], (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send(err.message);
    }
    console.log('inserted');
  });
  //res.send('inserted');
  res.redirect('/data.html');
});

router.get('/', function(req, res, next) {
  sql= "SELECT * FROM quote";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});
module.exports = router;