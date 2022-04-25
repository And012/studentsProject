import { Route, Routes, useNavigate } from "react-router-dom";
import { Text_BYURAKAN } from "./const.js";
import styles from "./Victor.module.css"

function Astxaditaran(){
    return(
        <>
    <Routes>
        <Route path="/astx" element={<div>hello</div>}/>
    </Routes>
    </>
    );
}

function Byurakan(){
    const navigate = useNavigate
    return(
        <>
        <div className={styles.list}>
            {Text_BYURAKAN}
            <a className={styles.forMore} onClick={()=>{navigate('/astx')}}>Իմանալ ավելին</a>
        </div>
        </>
    );
}



export default Byurakan