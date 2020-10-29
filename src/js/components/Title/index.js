import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

export const propTypes = {
  topicIndex: PropTypes.object,
  randomTopic: PropTypes.func,
};

function Title(props) {
  const { topicIndex, randomTopic } = props;
  return (
    <div className={styles.title}>
      <button onClick={randomTopic}>抽題目</button>
      <div className={styles.topic}>
        <label className={styles["topic-label"]}>題示一：</label>
        <span className={styles["topic-name"]}>{topicIndex.title[0]}</span>
      </div>

      <div className={styles.topic}>
        <label className={styles["topic-label"]}>題示二：</label>
        <span className={styles["topic-name"]}>{topicIndex.title[1]}</span>
      </div>
    </div>
  );
}
Title.propTypes = propTypes;
export default Title;
