import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
export const propTypes = {
  name: PropTypes.string,
};
function Round(props) {
  const iniRoundState = {
    count: 3,
    start: false,
  };
  let [roundCount, setRoundCount] = useState(iniRoundState.count);
  let [roundStart, setRoundStart] = useState(iniRoundState.start);
  const roundTimerStart = () => setRoundStart(true);
  const roundTimerStop = () => setRoundStart(false);
  const reset = () => {
    setRoundCount(iniRoundState.count);
    setRoundStart(iniRoundState.start);
  };
  useEffect(() => {
    if (!roundStart) return;

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
  }, [roundStart]);

  return <>{roundCount}</>;
}

Round.propTypes = propTypes;
export default Round;
