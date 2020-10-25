import React from 'react';

/*function Greet() {
    return <h1>Hello</h1>
}*/

/* ES6 */
const Greet = (props) => {
return(
    <div>
   <h1>Hello  {props.name} {props.code}</h1>
   <p>{props.code}</p>
   </div>
)
}
export default Greet;
