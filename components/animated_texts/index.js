import { useRef, useEffect } from "react";
import styles from "./animated_texts.module.scss";

const AnimatedTexts = ({ texts, morphTime = 3, cooldownTime = 0.5, className }) => {
  const index = useRef();
  const text1 = useRef();
  const text2 = useRef();

  const previousTimeRef = useRef();
  const requestRef = useRef();

  const morph = useRef(0);
  const cooldown = useRef(cooldownTime);

  const doMorph = () => {
    morph.current = morph.current - cooldown.current;
    cooldown.current = 0;

    let fraction = morph.current / morphTime;

    if (fraction > 1) {
      cooldown.current = cooldownTime;
      fraction = 1;
    }

    dsetMorph(fraction);
  };

  const dsetMorph = (fraction) => {
    text2.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    text1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    const content1 = texts[index.current % texts.length];
    const content2 = texts[(index.current + 1) % texts.length];

    text1.current.textContent = content1;
    text2.current.textContent = content2;
  };

  const doCooldown = () => {
    morph.current = 0;

    text2.current.style.filter = "";
    text2.current.style.opacity = "100%";

    text1.current.style.filter = "";
    text1.current.style.opacity = "0%";
  };

  const animate = (newTime) => {
    if (previousTimeRef.current != undefined) {
      let shouldIncrementIndex = cooldown.current > 0;
      let dt = (newTime - previousTimeRef.current) / 1000;

      cooldown.current = cooldown.current - dt;

      if (cooldown.current <= 0) {
        if (shouldIncrementIndex) {
          index.current++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }
    previousTimeRef.current = newTime;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!texts) return;

    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    index.current = texts.length - 1;
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [texts]); // Make sure the effect runs only once

  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.container}>
        <span className={styles.text1} ref={text1}></span>
        <span className={styles.text2} ref={text2}></span>
      </div>

      <svg className={styles.filters} id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedTexts;
