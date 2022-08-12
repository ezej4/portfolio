import { useState, useRef, useEffect } from "react";

const useTypingText = (texts, speed, amountDeleteCharacters = 4) => {
  const [currentText, setCurrentText] = useState();
  const isRemoving = useRef();
  const indexText = useRef();
  const indexLetter = useRef();

  useEffect(() => {
    indexText.current = 0;
    indexLetter.current = 0;
    isRemoving.current = false;

    const resetVar = () => {
      if (indexText.current >= texts.length - 1) {
        indexText.current = 0;
      } else {
        indexText.current++;
      }
      isRemoving.current = false;
      indexLetter.current = 0;
    };

    const removeLetter = () => {
      if (indexLetter.current <= 0) {
        return resetVar();
      }

      indexLetter.current = indexLetter.current - amountDeleteCharacters;
      return setCurrentText(texts[indexText.current].substring(0, indexLetter.current));
    };

    const addLetter = () => {
      if (indexLetter.current === texts[indexText.current].length) {
        return (isRemoving.current = true);
      }

      indexLetter.current++;
      return setCurrentText(texts[indexText.current].slice(0, indexLetter.current));
    };

    const interval = setInterval(() => {
      if (isRemoving.current) {
        removeLetter();
      } else {
        addLetter();
      }
    }, speed);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { currentText };
};

export default useTypingText;
