import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const UseAnimationOnView = ({ elementRef, animation, inView, disableAnimation, delay }) => {
  const [alreadyAnimate, setAlreadyAnimate] = useState(false);

  const addAnimation = useCallback(() => {
    elementRef.current.classList.add(animation);
  }, [animation, elementRef]);

  useEffect(() => {
    if (!inView) return;
    if (alreadyAnimate || disableAnimation || !elementRef.current) return;

    const timeoutId = setTimeout(() => {
      setAlreadyAnimate(true);
      addAnimation();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [addAnimation, alreadyAnimate, delay, disableAnimation, elementRef, inView]);

  useEffect(() => {
    if (!inView) return;
    if (alreadyAnimate || disableAnimation || !elementRef.current || delay) return;

    setAlreadyAnimate(true);

    addAnimation();
  }, [addAnimation, alreadyAnimate, delay, disableAnimation, elementRef, inView]);
};

export default UseAnimationOnView;
