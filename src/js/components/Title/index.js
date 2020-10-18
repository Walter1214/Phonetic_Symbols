import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import { random, isNumber } from "lodash";

export const propTypes = {
  name: PropTypes.string,
};

function Title(props) {
  const topicList = [
    ["a-1", "a-2"],
    ["b-1", "b-2"],
    ["c-1", "c-2"],
    ["d-1", "d-2"],
    ["e-1", "e-2"],
  ];
  const [topicIndex, setTopicIndex] = useState(null);
  function randomTopic() {
    const index = random(0, 4);
    setTopicIndex(index);
  }
  return (
    <div className={styles.title}>
      <button onClick={randomTopic}>抽題目</button>
      <div className={styles.topic}>
        <label className={styles["topic-label"]}>題目一：</label>
        <span className={styles["topic-name"]}>
          {isNumber(topicIndex) && topicList[topicIndex][0]}
        </span>
      </div>

      <div className={styles.topic}>
        <label className={styles["topic-label"]}>題目二：</label>
        <span className={styles["topic-name"]}>
          {isNumber(topicIndex) && topicList[topicIndex][1]}
        </span>
      </div>
    </div>
  );
}
Title.propTypes = propTypes;
export default Title;
