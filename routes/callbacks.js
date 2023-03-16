var connection = require('mysql').createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASS,
  database : process.env.MYSQL_DB
});

var callbacks = {
  api: {
      post: {
        // main
      },
  }
};

// ======================================== API ========================================
// POST
callbacks.api.post.main = function(req,res){
  
  connection.connect();
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
  connection.end();

  return res.end;

};

// ======================================== EXPORT ========================================
module.exports = callbacks;
