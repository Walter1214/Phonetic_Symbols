import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import { shuffle } from "lodash";
export const propTypes = {
  topicIndex: PropTypes.object,
  setRoundIsStart: PropTypes.func,
  setRoundCount: PropTypes.func,
  retsetRoundCount: PropTypes.func,
};
// const phoneticList = ['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ','ㄗ','ㄘ','ㄙ','ㄧ','ㄨ','ㄩ','ㄚ','ㄛ','ㄜ','ㄝ','ㄞ','ㄟ','ㄠ','ㄡ','ㄢ','ㄣ','ㄤ','ㄥ','ㄦ']
function Phonetic(props) {
  const [phonetic, setPhonetic] = useState([]);
  const [counter, setCounter] = useState(-1);
  const {
    topicIndex,
    retsetRoundCount,
    setRoundIsStart,
    setRoundCount,
  } = props;

  function randomPhonetic() {
    if (phonetic.length === 0) {
      alert("請選擇題目");
      return;
    }
    if (counter < phonetic.length) {
      setCounter(() => counter + 1);
      retsetRoundCount();
      setRoundIsStart(true);

      console.log(phonetic);
      console.log("phonetic", counter, phonetic[counter]);
    } else {
      alert("注音用完");
    }
  }
  useEffect(() => {
    setPhonetic(shuffle(topicIndex.phonetic));
    setCounter(-1);
    setRoundIsStart(false);
    setRoundCount(16);
    console.log("phonetic", phonetic);
    return () => {};
  }, [topicIndex]);

  return (
    <>
      <div className={styles.phonetic}>
        <div className={styles["phonetic-title"]}>選字ㄅ、ㄆ、ㄇ…</div>
        <div className={styles["phonetic-button"]}>
          <button onClick={randomPhonetic}>隨機注音</button>
        </div>
        <div className={styles["phonetic-item"]}>
          {counter > -1 && phonetic[counter]}
        </div>
      </div>
    </>
  );
}
Phonetic.propTypes = propTypes;
export default Phonetic;
