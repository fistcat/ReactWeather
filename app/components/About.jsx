var React = require('react');

var About = (props) =>{
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is demo app that using react to render dom and use openweathermap as api for all the weather information</p>
      <a className="expanded button" href="https://facebook.github.io/react/">ReactJS</a>
      <a className="expanded button" href="http://openweathermap.org/">Openweathermap</a>
      <p> Feel free to check it out my Git hub link also:</p>
      <a className="expanded button success" href="https://github.com/fistcat/ReactWeather/">GitHub Repo</a>
      <p>My Bro's twitch.tv channel osu profiles</p>
      <a className="expanded button alert" href="https://www.twitch.tv/jjkkstar">James Twitch Channel</a>
      <a className="expanded button alert hollow" href="https://osu.ppy.sh/u/7499518">James osu profiles</a>
    </div>
  )
};

module.exports = About;
