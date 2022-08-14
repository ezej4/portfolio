import { useContext } from "react";
import { ThemeContext, themes } from "../../../contexts/theme";
import Icon from "../../icon";
import styles from "./theme_switch.module.scss";

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    if (theme === themes.dark.name) {
      return setTheme("light");
    }
    return setTheme("dark");
  };

  return (
    <button className={styles.button_hide} aria-label="theme-switch"  onClick={handleThemeChange}>
      <Icon name={"themeSwitch"} className={styles.theme_switch} />
    </button>
  );
};

export default ThemeSwitch;
