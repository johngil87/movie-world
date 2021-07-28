const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('../database/database');

//Initializations
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended:false})); //Convertir los datos enviados desde un formulario en un formato JSON
app.use(bodyParser.json());
app.use(cors());

//Routers


module.exports = app