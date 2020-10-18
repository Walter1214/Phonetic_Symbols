import React from "react";
import styles from "./style.module.scss";
import Title from "../../components/Title";
import Phonetic from "../../components/Phonetic";
import Timer from "../../components/Timer";
function Home(props) {
  return (
    <div className={styles.home}>
      <Title name="123"></Title>
      <div className={styles.tool}>
				<Phonetic name="Test"></Phonetic>
				<Timer></Timer>
      </div>
    </div>
  );
}
export default Home;
