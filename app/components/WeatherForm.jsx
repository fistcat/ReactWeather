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
          <input placeholder="enter state" ref="location"/>
          <button>get Weather</button>
        </form>
      </div>

    )
  }

});

module.exports = WeatherForm;
