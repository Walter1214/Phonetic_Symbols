import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
export const propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
};
export const defaultProps = {
  name: "123",
  count: 3,

};
function Round(props) {
  const { name } = props;
  const iniRoundState = {
    count: 3,
    isStart: false,
  };
  let [roundCount, setRoundCount] = useState(iniRoundState.count);
  let [roundIsStart, setRoundIsStart] = useState(iniRoundState.isStart);
  const roundTimerStart = () => setRoundIsStart(true);
  const roundTimerStop = () => setRoundIsStart(false);
  const reset = () => {
    setRoundCount(iniRoundState.count);
    setRoundIsStart(iniRoundState.start);
  };
  useEffect(() => {
    if (!roundIsStart) return;

    let roundTimer = setInterval(() => {
      setRoundCount((roundCount) => {
        if (roundCount === 0) {
          roundTimerStop();
        }
        return roundCount - 1 <= 0 ? 0 : roundCount - 1;
      });
    }, 1000);
    return () => {
      clearInterval(roundTimer);
    };
  }, [roundIsStart]);

  return <>{roundCount}</>;
}

Round.propTypes = propTypes;
Round.defaultProps = defaultProps;
export default Round;
