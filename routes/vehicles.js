const express = require('express');
const router = express.Router();
const buildLocationArray = require('../helpers/buildLocation');
const searchIdVehicle = require('../helpers/searchVehicle');
//Import data file
const vehicles_location = require('../data/vehicles-location.json');

router.get('/', (req, res) => {
  let location = buildLocationArray(vehicles_location);
  res.send(JSON.stringify(location));
});

router.post('/', (req, res) => {
  let findIdVehicle = req.body.location;
  console.log('I am in post router');
  console.log('findIdVehicle' + findIdVehicle.length);
  let vehicleInPoloy = searchIdVehicle(vehicles_location, findIdVehicle);
  console.log('after search ' + vehicleInPoloy.length);
  res.send(JSON.stringify(vehicleInPoloy));
});

module.exports = router;
