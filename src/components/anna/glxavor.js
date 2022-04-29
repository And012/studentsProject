import { Route, Routes, useNavigate } from "react-router-dom";
import styles from "./Victor.module.css";
import Byurakan from "./byurakan";
import {
  ABOUT_SIENCE,
  BEEING_AUTHER,
  BIOGRAFY,
  COMUNIST_MEMBER,
  EDUCATION,
  LITTLE_PLANET,
  LONDON_COMPANY,
  MEMBERS,
  SIENCE_ACADEMY,
  SINCE,
  SPEACH,
  SPEACH_FIRST,
  SPEACH_SECOND,
  STAR_SYSTEM_FIRST,
  STAR_SYSTEM_SECOND,
  LIST_SEVEN_MAP,
  LIST_SIX_MAP,
  ARR_NAVIGATE
} from "./const.js";

function Victor_Himnakan() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.navigateList}>
        <ul className={styles.my_ul}>
          {ARR_NAVIGATE.map(([el1, el2], index) => {
            return (
              <li className={styles.my_li} key={index}>
                <a className={styles.my_a_teg}
                  onClick={() => {
                    navigate(el2);
                  }}
                >
                  {el1}
                </a>
              </li>
            );
          })}
        </ul>
        <a className={styles.letsPlay} hraf=""> Արի խաղանք</a>
      </div>
      <Routes>
        <Route path="/" element={<Victor />} />
        <Route path="biografy" element={<BIO />} />
        <Route path="eduacation" element={<EDU />} />
        <Route path="pedagog" element={<PEDAGOG />} />
        <Route path="activity" element={<ACTIVITY />} />
        <Route path="politics" element={<POLITICL />} />
        <Route path="sience" element={<SIENCE />} />
        <Route path="reword" element={<REWORDS />} />
        <Route path="byurakan" element={<Byurakan />} />
      </Routes>
    </>
  );
}

function Victor() {
  return (
    <>
      <h1 className={styles.anunAzganun}>Վիկտոր Համբարձումյան</h1>
      <div className={styles.headEr}>
        <div className={styles.img_1}></div>
      </div>
    </>
  );
}

function BIO() {
  return (
    <>
      <div className={styles.list}>
        {BIOGRAFY} <br />
        {EDUCATION} <br />
        {ABOUT_SIENCE} <br />
        {MEMBERS}
      </div>
    </>
  );
}

function EDU() {
  return (
    <>
      <div className={styles.list}>
        {LONDON_COMPANY} <br />
        {SPEACH} <br />
        {STAR_SYSTEM_FIRST} <br />
        {STAR_SYSTEM_SECOND}
      </div>
    </>
  );
}

function PEDAGOG() {
  return (
    <>
      <div className={styles.list}>{BEEING_AUTHER}</div>
    </>
  );
}
function ACTIVITY() {
  return (
    <>
      <div className={styles.list}>
        {SINCE}
        <div className={styles.xosq}>
          {SPEACH_FIRST} <br />
          {SPEACH_SECOND}
        </div>
      </div>
    </>
  );
}
function POLITICL() {
  return (
    <>
      <div className={styles.list}>{COMUNIST_MEMBER}</div>
    </>
  );
}
function SIENCE() {
  return (
    <>
      <div className={styles.list}>
        {SIENCE_ACADEMY}

        <ul className={styles.list_ul_1}>
          {LIST_SIX_MAP.map((el, index) => {
            return <li className={styles.my_li} key={index}>{el}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
function REWORDS() {
  return (
    <>
      <div className={styles.list}>
        <ul className={styles.list_ul_2}>
          {LIST_SEVEN_MAP.map((el, index) => {
            return <li className={styles.my_li} key={index}>{el}</li>;
          })}
        </ul>
        {LITTLE_PLANET}
      </div>
    </>
  );
}

export {Victor_Himnakan};

