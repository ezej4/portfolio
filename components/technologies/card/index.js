import Icon from "../../icon";
import styles from "./card.module.scss";

const Card = ({ logo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <Icon name={logo} className={`${styles.card__icon} ${styles[logo]}`} />
      </div>
      <span className={styles.card__footer}>{logo}</span>
    </div>
  );
};

export default Card;
