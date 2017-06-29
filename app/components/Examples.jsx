var React = require('react');
var {Link} = require('react-router')

var Examples = (props)=>{
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are some example</p>
      <ol>
          <li>
             <Link to='/?location=Sydney'>Sydney,Au</Link>
          </li>
          <li>
             <Link to='/?location=Guangdong'>Guangdong,CN</Link>
          </li>
      </ol>
    </div>
  )
}

module.exports= Examples;
