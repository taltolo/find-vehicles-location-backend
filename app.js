const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//set the Header
app.all('*', (req, res, next) => {
  res.setHeader('Acces-Control-Allow-Origin', '*');
  res.setHeader('Acces-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Acces-Contorl-Allow-Methods', 'Content-Type', 'Authorization');
  next();
});

//Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Import Routes
const vehiclesRoute = require('./routes/vehicles');
app.use('/vehicles', vehiclesRoute);

//Start listen
app.listen(3000);
