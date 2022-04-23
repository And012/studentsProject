import { Route, Routes, useNavigate } from "react-router-dom";
import { listByurakan } from "./text";

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
        <div className="list">
            {listByurakan}
            <a id="imanalavelin" onClick={()=>{navigate('/astx')}}>Իմանալ ավելին</a>
        </div>
        </>
    );
}



export default Byurakan