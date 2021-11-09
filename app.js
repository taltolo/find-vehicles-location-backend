const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.all('*', (req, res, next) => {
  res.setHeader('Acces-Control-Allow-Origin', '*');
  res.setHeader('Acces-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Acces-Contorl-Allow-Methods', 'Content-Type', 'Authorization');
  next();
});

//Middlewares
//Using middleware parser
app.use(bodyParser.json());
app.use('/vehicles', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  next();
});

//Import Routes
const vehiclesRoute = require('./routes/vehicles');
app.use('/vehicles', vehiclesRoute);

//Start listen
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
