import { useRef } from "react";
import styles from "./technologies.module.scss";
import Card from "./card";
import UseAnimationOnView from "../../hooks/useAnimationOnView";

const Technologies = ({ title, list, inView }) => {
  const contentRef = useRef();
  UseAnimationOnView({ inView, animation: "fadeIn", elementRef: contentRef });

  return (
    <section className={styles.technologies}>
      <div className={styles.technologies__filter_op}></div>
      <div className={styles.technologies__filter}>
        <div ref={contentRef} className={styles.technologies__content}>
          <h3 className={styles.technologies__title}>{title}</h3>
          <div className={styles.technologies__cards}>
            {list && list.map((logo) => <Card key={logo} logo={logo} />)}
          </div>
          {/*   <small>and a few more... </small> */}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
