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
     title: ['一種水果', '台灣可見'],
     phonetic: ['ㄅ','ㄆ','ㄇ','ㄈ','ㄊ','ㄋ','ㄌ','ㄏ','ㄐ','ㄑ','ㄒ','ㄕ','ㄘ','ㄙ','ㄧ'],
    },
    {
     title: ['國家名稱', '非地區/地名'],
     phonetic: ['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄒ','ㄓ','ㄕ','ㄖ','ㄙ','ㄧ','ㄨ','ㄩ','ㄚ','ㄜ','ㄞ','ㄠ'],
    },
    {
     title: ['人名', '歷史人物'],
     phonetic: ['ㄅ','ㄆ','ㄇ','ㄉ','ㄊ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄗ','ㄘ','ㄙ','ㄧ','ㄨ','ㄩ','ㄞ'],
    },
    {
     title: ['一定有數字的物品', '非食品與機器'],
     phonetic: ['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ','ㄗ','ㄘ','ㄙ','ㄧ','ㄨ'],
    },
    {
     title: ['捷運站名', '紅藍綠'],
     phonetic: ['ㄅ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄕ','ㄙ','ㄧ','ㄨ','ㄩ'],
    },
   {
     title: ['尚未絕種的動物', '四腳行走'],
     phonetic: ['ㄅ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄏ','ㄐ','ㄒ','ㄓ','ㄔ','ㄕ','ㄙ','ㄧ','ㄨ','ㄩ','ㄜ'],
    },
   {
     title: ['東西', '單位一顆'],
     phonetic: ['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄏ','ㄑ','ㄒ','ㄓ','ㄕ','ㄘ','ㄙ','ㄧ','ㄨ','ㄩ'],
    },
   {
     title: ['台灣', '地名'],
     phonetic: ['ㄅ','ㄆ','ㄇ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ','ㄘ','ㄙ','ㄧ','ㄨ','ㄩ'],
    },
   {
     title: ['東西', '需要用電'],
     phonetic: ['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄌ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ','ㄙ','ㄧ','ㄨ','ㄢ'],
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
