var http = require("http");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user     : 'root',
  password : 'Foxteo2714',
  database : 'tareaspython',
  port: 3306,
  insecureAuth : true
});

connection.connect(); 
var resultado = {};
connection.query('SELECT * FROM TAREAS', function (error, results, fields) {
  if (error) throw error;
   resultado = results;
});

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': "application/json" });

    if (request.method === 'GET') {
        response.write(JSON.stringify(resultado));
        response.end();
     
     }    
      
    }).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');