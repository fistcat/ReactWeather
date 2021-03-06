var React  = require('react');

let WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    let location =  this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value ='';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search"placeholder="Search weather by city" ref="location"/>
          <button className="expanded button hollow">Get Weather</button>
        </form>
      </div>

    )
  }

});

module.exports = WeatherForm;
