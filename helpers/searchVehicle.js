//Serach for the data on each vehicles insaid the polygon
//Return an array of that vehicles
function findIdVehicle(vehicles, locations) {
  let vehiclesId = [];
  locations.map((coordinates, indexC) => {
    vehicles.map((vehicle, indexV) => {
      let lat = vehicle.location.lat;
      let lng = vehicle.location.lng;
      if (coordinates.lat === lat && coordinates.lng === lng) {
        vehiclesId.push(vehicle);
      }
    });
  });
  return vehiclesId;
}

module.exports = findIdVehicle;
