//Build the array location fron each vehicles data
function buildLocationArray(vehicles) {
  let location = [];
  vehicles.map((vehicle, index) => {
    location.push({
      lat: vehicle.location.lat,
      lng: vehicle.location.lng,
    });
  });
  return location;
}

module.exports = buildLocationArray;
