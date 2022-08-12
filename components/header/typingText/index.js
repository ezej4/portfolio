import useTypingText from "./useTypingText";
import styles from "./typing_text.module.scss";

const TypingText = ({ texts, className, speed = 200 }) => {
  const { currentText } = useTypingText(texts, speed);

  return (
    <div className={`${styles.typing_text} ${className}`}>
      <p className={styles.typing_text__parr}>
        {currentText}
        <span className={styles.typing_text__carret} />
      </p>
    </div>
  );
};

export default TypingText;
