import { useEffect, useRef, useState, useContext } from "react";
import { InView } from "react-intersection-observer";
import styles from "../../styles/Home.module.scss";
import { LanguajeContext } from "../../contexts/languaje";
import NavBar from "../../components/nav_bar";
import MainHeader from "../../components/header";
import AboutMe from "../../components/about_me";
import Technologies from "../../components/technologies";
import WorkExperience from "../../components/work_experience";
import Projects from "../../components/projects";
import Contact from "../../components/contact";
import Chevron from "../../components/chevron";
import constants from "../../constants";
import getdata from "../../data/home";

const Main = ({ isMobile }) => {
  const { pageSections } = constants;
  const [languaje] = useContext(LanguajeContext);
  const [showUpperButton, setShowUpperButton] = useState(false);
  const [showLowerButton, setShowLowerButton] = useState(true);
  const [lastSectionInView, setLastSectionInView] = useState(pageSections.header);
  const sectionRefs = useRef([]);
  const currentSectionIndex = useRef(0);
  const [data, setData] = useState(getdata(languaje, isMobile));
  const TRESHOLD_PAGES = 0.6;

  useEffect(() => {
    if (!languaje) return;

    setData(getdata(languaje, isMobile));
  }, [languaje, isMobile]);

  useEffect(() => {
    const isHeaderInView = lastSectionInView == pageSections.header;
    const isContactInView = lastSectionInView == pageSections.contact;

    if (isHeaderInView) {
      setShowUpperButton(false);
    } else {
      setShowUpperButton(true);
    }

    if (isContactInView) {
      setShowLowerButton(false);
    } else {
      setShowLowerButton(true);
    }
  }, [lastSectionInView, pageSections]);

  const handleSectionVisibility = (section, inView) => {
    const showsUp = !!inView;
    const sectionIsAlreadyInView = section === lastSectionInView;

    if (sectionIsAlreadyInView && inView) {
      return;
    }

    if (showsUp) {
      setLastSectionInView(section);
      currentSectionIndex.current = section.index;
    }
  };

  const moveSection = (type, sectionNumber) => {
    const offSet = isMobile ? 50 : 80;

    if (typeof sectionNumber === "number") {
      currentSectionIndex.current = sectionNumber;
    } else {
      currentSectionIndex.current =
        type === "up" ? currentSectionIndex.current - 1 : currentSectionIndex.current + 1;
    }

    const sectionToScroll = sectionRefs.current[currentSectionIndex.current];
    const y = sectionToScroll.getBoundingClientRect().top + window.pageYOffset - offSet;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <NavBar lastSectionInView={lastSectionInView} goToSection={moveSection} {...data.nav_bar} />
      <Chevron
        type="up"
        hide={!showUpperButton}
        onClick={() => {
          moveSection("up");
        }}
      />
      <Chevron
        type="down"
        hide={!showLowerButton}
        onClick={() => {
          moveSection("down");
        }}
      />

      <main className={styles.main}>
        <InView
          as="div"
          onChange={(inView) => {
            handleSectionVisibility(pageSections.header, inView);
          }}
          threshold={TRESHOLD_PAGES}
        >
          <div ref={(el) => (sectionRefs.current[pageSections.header.index] = el)}>
            <MainHeader {...data.header} />
          </div>
        </InView>
        <InView
          as="div"
          onChange={(inView) => {
            handleSectionVisibility(pageSections.about_me, inView);
          }}
          threshold={TRESHOLD_PAGES}
        >
          <div ref={(el) => (sectionRefs.current[pageSections.about_me.index] = el)}>
            <AboutMe {...data.about_me} inView={pageSections.about_me === lastSectionInView} />
          </div>
        </InView>
        <InView
          as="div"
          onChange={(inView) => {
            handleSectionVisibility(pageSections.technologies, inView);
          }}
          threshold={TRESHOLD_PAGES}
        >
          <div ref={(el) => (sectionRefs.current[pageSections.technologies.index] = el)}>
            <Technologies
              {...data.technologies}
              inView={pageSections.technologies === lastSectionInView}
            />
          </div>
        </InView>

        <InView
          as="div"
          onChange={(inView) => {
            handleSectionVisibility(pageSections.work_experience, inView);
          }}
          threshold={TRESHOLD_PAGES}
        >
          <div ref={(el) => (sectionRefs.current[pageSections.work_experience.index] = el)}>
            <WorkExperience
              {...data.work_experience}
              inView={pageSections.work_experience === lastSectionInView}
            />
          </div>
        </InView>

        <InView
          as="div"
          onChange={(inView) => {
            handleSectionVisibility(pageSections.projects, inView);
          }}
          threshold={TRESHOLD_PAGES}
        >
          <div ref={(el) => (sectionRefs.current[pageSections.projects.index] = el)}>
            <Projects
              isMobile={isMobile}
              {...data.projects}
              inView={pageSections.projects === lastSectionInView}
            />
          </div>
        </InView>

        <InView
          as="div"
          onChange={(inView) => {
            handleSectionVisibility(pageSections.contact, inView);
          }}
          threshold={TRESHOLD_PAGES}
        >
          <div ref={(el) => (sectionRefs.current[pageSections.contact.index] = el)}>
            <Contact {...data.contact} inView={pageSections.contact === lastSectionInView} />
          </div>
        </InView>
      </main>
    </div>
  );
};

export default Main;
