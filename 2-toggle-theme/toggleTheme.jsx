import React from "react";
import { useState } from "react";
function Theme() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };
  return (
    <>
      <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
        <p style={{ fontSize: "24px" }}>
          {isDarkTheme ? "Dark Mode" : "Light Mode"}
        </p>
        <button onClick={toggleTheme}>
          {isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </>
  );
}
export { Theme };
