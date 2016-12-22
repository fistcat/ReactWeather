var React = require('react');
var {Link} = require('react-router');

var Example = (props) =>{
  return(
    <div>
      <h1 className="text-center page-title">Example</h1>
      <p>Here are a few example locations to try out:(function not finished yet)</p>
      <ol>
        <li>
          <Link to='/?location=New York'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=Fuzhou'>Fuzhou, China</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;
