import React, { useState, useEffect } from "react";
import "./theme.css";
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeSwitcherMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.body.className = "dark";
    } else {
      // Default to light
      setIsDarkMode(false);
      document.body.className = "light";
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);

    if (newIsDarkMode) {
      document.body.className = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.className = "light";
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <div className="switch-theme-mode" onClick={toggleTheme}>
        {isDarkMode ? <BsSun /> : <BsMoon />}
        <div className="theme-ring one">
          <div className="theme-dot"></div>
        </div>
        <div className="theme-ring two">
          <div className="theme-dot"></div>
        </div>
        <div className="theme-ring three">
          <div className="theme-dot"></div>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcherMode;
