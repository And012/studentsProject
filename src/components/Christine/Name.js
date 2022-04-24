import { useNavigate } from "react-router-dom"
import INFO from "./Constant/Constant"
import styles from "./styles/Charents.module.css";


function Name(){
    const navigate = useNavigate()
    return(
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
                  }}>Անձնական կյանք</li></ul>
            </nav>
       
            <div className={styles.container}>
                <h2 style={{margin:"10px 0"}} >Անձնական կյանք</h2>
                <a className={styles.back} href="/charenc">հետ վերադառնալ գլխավոր էջ</a>
                <hr></hr>
                <p className={styles.bio1}>{INFO.life}</p>
            </div>
        </>
    )
}
export default Name