import { useState } from "react";

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h2>welcome back!</h2> : <h2>please login.</h2>}
      {isLoggedIn ? <p>yes true</p>: <p>no false</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Status</button>
    </div>
  );
}

export default Dashboard;