var React  = require('react');

let WeatherMessage = (props) =>{
  let{temp,location} = props

  return(
    <h3>It is {temp} in {location}</h3>
  );
};
module.exports = WeatherMessage;
