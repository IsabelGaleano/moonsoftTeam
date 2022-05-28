var path = require('path');
var express = require('express');
var app = express(); //Inicializa express
 
var folder = path.join(__dirname, 'public'); //Definiendo que hay una carpeta public
app.use(express.static(folder)) //Use la carpeta public


// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });

var port_number = server.listen(process.env.PORT || 80);
app.listen(port_number);
