import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

export const propTypes = {
  name: PropTypes.string,
};

function Timer(props) {
  let roundTimer = null;
  const [roundTime, setRouondTime] = useState(15000);

  useEffect(() => {});

  return (
    <div className={styles["timer"]}>
      <div className={styles["timer-title"]}>計時器</div>
      <div className={styles["timer-round-time"]}>
        <div className={styles["timer-round-time__title"]}>Round Time：</div>
        <div>{roundTime}</div>
      </div>
      <div className={styles["timer-game-time"]}>
        <div className={styles["timer-game-time__title"]}>Game Time：</div>
        <div></div>
      </div>
    </div>
  );
}
Timer.propTypes = propTypes;
export default Timer;
