import { useRef } from "react";
import Image from "next/image";
import styles from "./about_me.module.scss";
import UseAnimationOnView from "../../hooks/useAnimationOnView";

const AboutMe = ({ text, image, inView }) => {
  const contentRef = useRef();
  UseAnimationOnView({ inView, animation: "fadeIn", elementRef: contentRef });

  return (
    <section className={styles.about_me}>
      <div ref={contentRef} className={styles.about_me__content}>
        <div className={styles.about_me__card}>
          <Image
            width={image.width}
            height={image.height}
            src={image.src}
            alt={image.alt}
            className={styles.about_me__image}
          />

          <div className={styles.about_me__text} dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
