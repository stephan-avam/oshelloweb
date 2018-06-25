const http = require('http');
const mysql = require('mysql');

const name = 'node-hello-world';
const port = process.env.PORT || '8080';
const msg = process.env.MESSAGE || 'Hello World';

const app = new http.Server();

app.on('request', (req, res) => {
  const connection = mysql.createConnection({
    host     : process.env.MARIADB_SERVICE_HOST,
    user     : process.env.MARIA_USER,
    password : process.env.MARIA_SECRET,
    database : process.env.MARIA_DBNAME
  });
  connection.connect();
  connection.query('SELECT description from ici_test where id = 1', function (error, results, fields) {
    if (error) result = error;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(results[0].description);
    res.end('\n');
  });
  connection.end();
});

app.listen(port, () => {
  console.log(`${name} is listening on port ${port}`);
});

