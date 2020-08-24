//this is for iss spotter 3 - it wasn't printing out anything to the console...uncomment and check what happened
// // The code below is temporary and can be commented out.
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// //this was for version 2
// // fetchCoordsByIP('75.157.120.167',(error, coords) => {
// //   if (error) {
// //     console.log("It didn't work!", error);
// //     return;
// //   }

// fetchISSFlyOverTimes(exampleCoords, (error, passtimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned Times:', passtimes);

//   // fetchCoordsByIP(ip, function(error,data) {
//   // console.log(data);
//   // });
// });

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passtimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passtimes);
});