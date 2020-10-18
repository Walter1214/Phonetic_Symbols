import React, {useState} from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import {random} from 'lodash'
console.log('styles', styles)
export const propTypes = {
  name: PropTypes.string,
};

function Phonetic(props) {
  const phoneticList = ['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ','ㄗ','ㄘ','ㄙ','ㄧ','ㄨ','ㄩ','ㄚ','ㄛ','ㄜ','ㄝ','ㄞ','ㄟ','ㄠ','ㄡ','ㄢ','ㄣ','ㄤ','ㄥ','ㄦ']
  const [phoneticIndex, setPhoneticIndex] = useState(null);
  function randomPhonetic(){
    const index = random(0, 36)
    setPhoneticIndex(index)
  }
  return (
    <>
      <div className={styles.phonetic}>
        <div className={styles['phonetic-title']}>選字ㄅ、ㄆ、ㄇ…</div>
        <div className={styles['phonetic-button']}>
          <button onClick={randomPhonetic}>隨機注音</button>
        </div>
        <div className={styles['phonetic-item']}>
          {phoneticList[phoneticIndex]}
        </div>
      </div>
    </>
  );
}
Phonetic.propTypes = propTypes;
export default Phonetic;
