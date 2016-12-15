var React  = require('react');

let WeatherMessage = (props) =>{
  let{temp,location} = props

  return(
    <h3 className="text-center">It is {temp} Fahrenheit in {location}</h3>
  );
};
module.exports = WeatherMessage;
