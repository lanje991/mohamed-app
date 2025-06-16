import { useState } from "react";

function Inputter() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value); // read value from event
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}


export default Inputter