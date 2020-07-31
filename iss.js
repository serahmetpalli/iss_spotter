const request = require('request');


const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', function(error, response, body) {
    
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const obj = JSON.parse(body);
    // console.log(obj);
    ip = obj.ip;

    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip,callback) {
  request('https://ipvigilante.com/?'+ ip, function(error, response, body) {
    
    if (error) {
      callback(error, null);
      return; 
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coordinates by IP: ${body}`), null);
      return;
    }

    const obj = JSON.parse(body);
    // console.log(obj);
    // ip = obj.ip;

    const result = {
      latitude: obj.data.latitude,
      longitude: obj.data.longitude
    };

    callback(null, result);

  });
};



// fetchCoordsByIP('75.157.120.167', function(error,data) {
//   console.log(data);
// });


module.exports = { fetchMyIP , fetchCoordsByIP };



