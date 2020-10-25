import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
// import Round from "./Round/index";

export const propTypes = {
  count: PropTypes.number,
};

function Timer(props) {
  const { count } = props;
  return (
    <div className={styles["timer"]}>
      <div className={styles["timer-title"]}>計時器</div>
      <div className={styles["timer-round-time"]}>
        <div className={styles["timer-round-time__title"]}>Round Time：</div>
        <div className={styles["timer-round-time__count"]}>{count}</div>
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
