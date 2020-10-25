import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Title from "../../components/Title";
import Phonetic from "../../components/Phonetic";
import Timer from "../../components/Timer";
import { random } from "lodash";
function Home(props) {
  const initState = {
    topicIndex: {
      title: ["", ""],
      phonetic: [],
    },
  };
  const topicList = [
    {
      title: ["a-1", "a-2"],
      phonetic: ["ㄅ", "ㄆ", "ㄇ", "ㄈ", "ㄉ", "ㄊ"],
    },
    {
      title: ["b-1", "b-2"],
      phonetic: ["ㄅ", "ㄆ", "ㄇ"],
    },
    {
      title: ["c-1", "c-2"],
      phonetic: ["ㄅ", "ㄆ", "ㄇ"],
    },
  ];
  const [topicIndex, setTopicIndex] = useState(initState.topicIndex);
  function randomTopic() {
    if (window.confirm("是否換題目")) {
      const index = random(0, topicList.length - 1);
      setTopicIndex(topicList[index]);
    }

    // setTopicIndex(index);
  }
  // Rount Timer
  const initRoundState = {
    count: 15,
    isStart: false,
  };

  const [roundCount, setRoundCount] = useState(initRoundState.count);
  const [roundIsStart, setRoundIsStart] = useState(initRoundState.isStart);
  const retsetRoundCount = () => setRoundCount(initRoundState.count);
  useEffect(() => {
    if (!roundIsStart) return;

    let roundTimer = setInterval(() => {
      setRoundCount((roundCount) => {
        if (roundCount === 0) {
          setRoundIsStart(false);
        }
        return roundCount - 1 <= 0 ? 0 : roundCount - 1;
      });
    }, 1000);
    return () => {
      clearInterval(roundTimer);
    };
  }, [roundIsStart]);
  return (
    <div className={styles.home}>
      <Title topicIndex={topicIndex} randomTopic={randomTopic}></Title>
      <div className={styles.tool}>
        <Phonetic
          topicIndex={topicIndex}
          setRoundIsStart={setRoundIsStart}
          setRoundCount={setRoundCount}
          retsetRoundCount={retsetRoundCount}
        ></Phonetic>
        <Timer count={roundCount}></Timer>
      </div>
    </div>
  );
}
export default Home;
