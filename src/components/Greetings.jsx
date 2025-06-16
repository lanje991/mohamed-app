import { Fragment } from "react";

function Greeting(props) {
  return(<>
  <h1 style={{backgroundColor:"green", color:"red"}}>
    Hello, {props.name} {props.surname} {props.lastname}!
    </h1>
    <h2>this text was not there</h2>
    </>);
  
}

export default Greeting;
