import { useRef } from "react";
import styles from "./work_experience.module.scss";
import Icon from "../icon";
import Job from "./job";
import UseAnimationOnView from "../../hooks/useAnimationOnView";

const WorkExperience = ({ jobs, inView }) => {
  const contentRef = useRef();
  UseAnimationOnView({ inView, animation: "fadeIn", elementRef: contentRef });

  return (
    <section className={styles.work_experience}>
      <div ref={contentRef} className={styles.work_experience__content}>
        <div className={styles.work_experience__jobs_line} />
        <Icon name={"case"} className={styles.work_experience__case_icon} />
        <div className={styles.work_experience__jobs}>
          {jobs &&
            jobs.map(({ title, logo, subtitle, desc, blurDataUrl }) => (
              <Job
                key={title}
                title={title}
                image={logo}
                className={styles.work_experience__job}
                blurDataUrl={blurDataUrl}
                subtitle={subtitle}
                content={desc}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
