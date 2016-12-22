let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=89ed2d9df481f8a910e49b3f59d8fd1b&units=imperial';

//89ed2d9df481f8a910e49b3f59d8fd1b

module.exports = {
  getTemp:function(location){
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(err){
      throw new Error(err.response.data.message);
    });
  }
}
