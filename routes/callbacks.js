var connection = require('mysql').createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASS,
  database : process.env.MYSQL_DB
});

var callbacks = {
  api: {
      post: {
        // savet
      },
  }
};

// ======================================== API ========================================
// POST
callbacks.api.post.savet = function(req,res){
  if(!req.body.tcconsent) return res.status(400).send("You must accept the terms and conditions");
  
  /* **** MYSQL START **** */
  connection.connect();
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
  connection.end();
  /* **** MYSQL END **** */

  return res.end();

};

// ======================================== EXPORT ========================================
module.exports = callbacks;
