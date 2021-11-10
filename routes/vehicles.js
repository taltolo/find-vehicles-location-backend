const express = require('express');
const router = express.Router();
const buildLocationArray = require('../helpers/buildLocation');
const searchIdVehicle = require('../helpers/searchVehicle');
//Import data file
const vehicles_location = require('../data/vehicles-location.json');

//Get all coordinates from each vehicel
//Build an array of them and send to the client
router.get('/', (req, res) => {
  let location = buildLocationArray(vehicles_location);
  res.send(JSON.stringify(location));
});

//Post the vehicel data to client
//By getting from the client all the coordinates insaid the polygon
router.post('/', (req, res) => {
  let findIdVehicle = req.body.location;
  console.log('findIdVehicle ' + findIdVehicle.length);
  let vehicleInPoloy = searchIdVehicle(vehicles_location, findIdVehicle);
  console.log('after search ' + vehicleInPoloy.length);
  res.send(JSON.stringify(vehicleInPoloy));
});

module.exports = router;
