import styles from "./card.module.scss";
import Image from "next/image";

const Card = ({ image, title, desc, cta, href }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__image_container}>
          <Image
            className={styles.card__image}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={title}
          />
        </div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__texts}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__desc}>{desc}</p>
        </div>
        <a href={href} target="_blank" rel="noreferrer" className={styles.card__button}>
          {cta}
        </a>
      </div>
    </div>
  );
};

export default Card;