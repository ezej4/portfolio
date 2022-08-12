import { useContext } from "react";
import ReactFlagsSelect from "react-flags-select";
import styles from "./country_combo.module.scss";
import { LanguajeContext } from "../../../contexts/languaje/";

const CountryCombo = () => {
  const [languaje, setLanguaje] = useContext(LanguajeContext);

  const default_lang = "GB";

  return (
    <ReactFlagsSelect
      className={styles.country_combo}
      countries={["GB", "ES"]}
      selected={languaje || default_lang}
      onSelect={(code) => setLanguaje(code)}
      customLabels={{ GB: "EN", ES: "ES" }}
    />
  );
};

export default CountryCombo;
