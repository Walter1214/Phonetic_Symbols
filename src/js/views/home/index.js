import React,{useRef} from "react";
import styles from "./style.module.scss";
import Title from "../../components/Title";
import Phonetic from "../../components/Phonetic";
import Timer from "../../components/Timer";
function Home(props) {
  const testRef = useRef(null)
  console.log('testRef', testRef)
  return (
    <div className={styles.home}>
      <Title name="123"></Title>
      <div className={styles.tool}>
				<Phonetic name="Test"></Phonetic>
				<Timer testRef={testRef}></Timer>
      </div>
    </div>
  );
}
export default Home;
