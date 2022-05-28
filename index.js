var path = require('path');
var express = require('express');
var app = express(); //Inicializa express
 
var folder = path.join(__dirname, 'public'); //Definiendo que hay una carpeta public
app.use(express.static(folder))//Use la carpeta public
app.listen(5000);