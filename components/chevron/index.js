import Icon from "../icon";
import styles from "./chevron_up.module.scss";
import cx from "classnames";

const Chevron = ({ className, type, hide, onClick }) => {
  const chevronType = type === "up" ? "chevronUp" : "chevronDown";
  return (
    !hide && (
      <Icon
        name={chevronType}
        className={cx(styles.chevron__icon, {
          [className]: className,
          [styles.chevron__icon__hide]: hide,
          [styles.chevron__icon__show]: !hide,
          [styles.chevron__icon__animate]: !hide,
          [styles.chevron__chevron_up]: type === "up",
          [styles.chevron__chevron_down]: type === "down",
        })}
      onClick={onClick}
      >
      </Icon>
    )
  );
};

export default Chevron;
