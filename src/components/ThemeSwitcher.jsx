import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

 

  const styles = {
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
      <button onClick={() => setDarkMode(darkMode)}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
