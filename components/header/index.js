import cx from "classnames";
import styles from "./header.module.scss";
import BackgroundDecoration from "./background_decoration";
import Image from "next/image";
import Icon from "../icon";
import { useInView } from "react-intersection-observer";
import TypingText from "./typingText";

const MainHeader = ({ title, subtitles, image }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <header ref={ref} className={styles.header}>
      <BackgroundDecoration className={styles.header__background_decoration} />
      <div className={styles.header__content}>
        <div className={styles.header__body}>
          <div className={styles.header__image_container}>
            <Image
              width={image.width}
              height={image.height}
              placeholder="blur"
              blurDataURL={image.blurDataUrl}
              className={styles.header__image}
              src={image.src}
              alt={image.alt}
            />
          </div>
          <div className={styles.header__text_container}>
            <h3 className={styles.header__title}>{title}</h3>
            <TypingText texts={subtitles} speed={200} />
          </div>

          <div className={styles.header__icons}>
            <Icon
              name={"bulb"}
              className={cx(styles.header__icon___bulb, {
                [styles.header__icon___bulb___animated]: inView,
              })}
            ></Icon>

            <Icon
              name={"code"}
              className={cx(styles.header__icon___code, {
                [styles.header__icon___code___animated]: inView,
              })}
            ></Icon>
            <Icon
              name={"laptop"}
              className={cx(styles.header__icon___laptop, {
                [styles.header__icon___laptop___animated]: inView,
              })}
            ></Icon>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
