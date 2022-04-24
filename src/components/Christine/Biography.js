import { useNavigate } from "react-router-dom";
import INFO from "./Constant/Constant";
import styles from "./styles/Charents.module.css";

function Bio() {
  const navigate = useNavigate();
  return (
    <>
      <nav className={styles.chNav}>
        <ul className={styles.ch_ul}>
          <li onClick={() => {
            navigate("/charenc/")
          }}>Գլխավոր</li>
          <li onClick={() => {
            navigate("/charenc/name")
          }}>Գրական անուն</li>
          <li onClick={() => {
            navigate("/charenc/bio")
          }}>Կենսագրություն</li>
          <li onClick={() => {
            navigate("/charenc/life")
          }}>Անձնական կյանք</li>
        </ul>
      </nav>
     
      <div className={styles.container}>
        <h2 style={{ margin: "10px 0" }}>Կենսագրություն</h2>
        <a href="/charenc" className={styles.back}>հետ վերադառնալ գլխավոր էջ</a>
        <hr />
        <p className={styles.bio1}>{INFO.bio}</p>
      </div>
    </>
  );
}
export default Bio;
