import React, { useState, useEffect } from "react";
import ThemeContext from "./themeContext";
import themes from "./themes";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");

    if (!!savedThemeLocal) {
      setTheme(savedThemeLocal);
    } else {
      localStorage.setItem("globalTheme", "dark");
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!theme) return;
    localStorage.setItem("globalTheme", theme);

    const changeThemeVar = (key, value) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    };

    changeThemeVar("bg", themes[theme].bg);
    changeThemeVar("bg_hex", themes[theme].bg_hex);
    changeThemeVar("text", themes[theme].text);
    changeThemeVar("text_hex", themes[theme].text_hex);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
