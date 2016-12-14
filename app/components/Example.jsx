var React = require('react');

// var Example = React.createClass({
//   render: function(){
//     return(
//       <h3>Example component</h3>
//     )
//   }
// });

//refactor for the stateless components when you don't have any defined function
//and state

var Example = (props) =>{
  return(
    <h3>Example component</h3>
  );
};

module.exports = Example;
