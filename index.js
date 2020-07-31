// The code below is temporary and can be commented out.
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('75.157.120.167',(error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned Coords:', coords);

  // fetchCoordsByIP(ip, function(error,data) {
  // console.log(data);
  // });

});