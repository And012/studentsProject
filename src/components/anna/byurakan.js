import { Text_BYURAKAN, BYURAKAN_TEXT_2, BYURAKAN_TEXT_3 } from "./const.js";
import styles from "./Victor.module.css"

function Byurakan(){
    return(
        <>
        <div className={styles.img_2}></div>
        <div className={styles.list}>
            {Text_BYURAKAN} <br/>
            {BYURAKAN_TEXT_2} <br/>
            {BYURAKAN_TEXT_3}
           
        </div>
        </>
    );
}



export default Byurakan