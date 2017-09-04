const express = require('express');
const router = express.Router();
const pg = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/d3angular';

const client = new pg.Client(connectionString);

try {
 client.connect();
}
catch(err){
  console.log("Error connecting Postgres db");
}

/* GET api listing. */
router.get('/', (req, res) => {

    const results = [];

    const query = client.query("SELECT date_of_product,sum(on_hand_value) FROM inventory GROUP BY date_of_product ORDER BY date_of_product;");

    query.then((data)=>{

      data.rows.forEach((row)=>{
          results.push(row);
      });

      return res.send(results);
  }).catch((error)=>{
      console.log("error",error);

      return res.send([]);
    });

});

module.exports = router;
