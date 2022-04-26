import { Route, Routes, useNavigate } from "react-router-dom";
import { Text_BYURAKAN } from "./const.js";
import styles from "./Victor.module.css"



function Byurakan(){
    const navigate = useNavigate()
    return(
        <>
            <Routes>
        <Route path="/astx" element={<div>hello</div>}/>
    </Routes>
        <div className={styles.list}>
            {Text_BYURAKAN}
            <a className={styles.forMore} onClick={()=>{navigate('/astx')}}>Իմանալ ավելին</a>
        </div>
        </>
    );
}



export default Byurakan