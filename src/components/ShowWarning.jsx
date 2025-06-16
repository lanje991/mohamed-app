import { useState } from "react";

function ShowWarning() {
  const [hasWarning, setHasWarning] = useState(false);

  return (
    <div>
      <button onClick={() => setHasWarning(!hasWarning)}>Toggle Warning</button>

      {hasWarning && (
        <p style={{ color: "red" }}>⚠️ Warning: Something went wrong!</p>
      )}
    </div>
  );
} 
export default ShowWarning;