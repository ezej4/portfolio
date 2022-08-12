import styles from "./job.module.scss";
import Image from "next/image";

const Job = ({ image, title, subtitle, content }) => {
  return (
    <div className={styles.job}>
      <div className={styles.job__header}>
        <div className={styles.job__image_container}>
          <Image layout="fill" objectFit="scale-down" src={image} alt={title} />
        </div>
        <div className={styles.job__titles}>
          <h3 className={styles.job__title}>{title}</h3>
          <h4 className={styles.job__subtitle}>{subtitle}</h4>
        </div>
      </div>
      <ul className={styles.job__desc} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Job;
