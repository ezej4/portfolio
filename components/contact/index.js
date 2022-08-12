import { useRef } from "react";
import UseAnimationOnView from "../../hooks/useAnimationOnView";
import Icon from "../icon";
import AnimatedTexts from "../animated_texts";
import styles from "./contact.module.scss";

const Contact = ({ titles, subtitle, icons, inView }) => {
  const contentRef = useRef();
  UseAnimationOnView({ inView, animation: "fadeIn", elementRef: contentRef });

  return (
    <section className={styles.contact}>
      <div ref={contentRef} className={styles.contact__content}>
        <AnimatedTexts texts={titles} className={styles.contact__title} />
        <p className={styles.contact__subtitle}>{subtitle}</p>
        <div className={styles.contact__icons}>
          {icons &&
            icons.map((icon) => (
              <a key={icon.name} href={icon.href} target="_blank" rel="noreferrer">
                <Icon name={icon.name} className={styles[icon.name]} />
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
