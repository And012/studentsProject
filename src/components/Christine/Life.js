import { useNavigate } from "react-router-dom"
import {info} from "./Charents"

function Life(){
    const navigate = useNavigate()
    return(
        <div className="container">
            <h2 style={{margin:"10px 0"}}>Անձնական կյանք</h2>
            <a className="back" onClick={() => {
            navigate("/charenc/")
            }}>հետ վերադառնալ գլխավոր էջ</a>
            <hr></hr>
            <p className="bio1">{info.life}</p>
        
        </div>
    )
}
export default Life