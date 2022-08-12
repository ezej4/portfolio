import { useRef } from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import UseAnimationOnView from "../../hooks/useAnimationOnView";
import styles from "./projects.module.scss";
import Card from "./card";
import "pure-react-carousel/dist/react-carousel.es.css";

const Projects = ({ title, list, inView }) => {
  const contentRef = useRef();
  UseAnimationOnView({ inView, animation: "fadeIn", elementRef: contentRef });

  return (
    <section className={styles.projects}>
      <div className={styles.projects__filter_op}></div>
      <div className={styles.projects__filter}>
        <div ref={contentRef} className={styles.projects__content}>
          <h3 className={styles.projects__title}>{title}</h3>
          <div className={styles.projects__cards}>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={list.length || 0}
              className={styles.projects__carousel}
            >
              <Slider>
                {list &&
                  list.map((project, index) => (
                    <Slide key={project.title} index={index}>
                      <Card
                        image={project.image}
                        title={project.title}
                        desc={project.desc}
                        cta={project.cta}
                        href={project.href}
                      />
                    </Slide>
                  ))}
              </Slider>
              <DotGroup className={styles.projects__carousel_dots} />
            </CarouselProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
