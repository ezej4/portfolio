import { useState } from "react";
import cx from "classnames";
import styles from "./nav_bar.module.scss";
import Icon from "../icon";
import CountryCombo from "./countryCombo";
import ThemeSwitch from "./themeSwitch";
import BurgerMenu from "./burgerMenu";

const NavBar = ({ items, lastSectionInView, goToSection }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const handleNavElementClick = (index) => {
    goToSection(null, index);
    setIsShowingMenu(false);
  };

  return (
    <header className={styles.nav_bar}>
      <div className={styles.nav_bar__content}>
        <BurgerMenu
          className={styles.nav_bar__switch_menu}
          isOpen={isShowingMenu}
          onClick={() => setIsShowingMenu((isShowing) => !isShowing)}
        />
        <Icon name={"logo"} className={styles.nav_bar__logo} />
        <nav
          className={cx(styles.nav_bar__nav, {
            [styles.nav_bar__nav___open]: isShowingMenu,
          })}
        >
          <ul className={styles.nav_bar__nav_list}>
            {items &&
              items.map((link, index) => (
                <li key={link.name} className={styles.nav_bar__nav_list_item}>
                  <span
                    className={cx(styles.nav_bar__nav_list_item_element, {
                      [styles.nav_bar__nav_list_item_element_active]:
                        lastSectionInView.name === link.name,
                    })}
                    onClick={() => handleNavElementClick(index)}
                  >
                    {link.text}
                  </span>
                </li>
              ))}
          </ul>
        </nav>
        <div className={styles.nav_bar__left_actions}>
          <ThemeSwitch className={styles.nav_bar__theme_switch} />
          <CountryCombo />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
