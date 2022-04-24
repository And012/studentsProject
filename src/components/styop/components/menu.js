import { useState } from "react"
import { img } from "../text"

export default function Menu(){
    return <div>
    </div>
}

export function Qaxaqakanutyun(){
     const [index,setindex] = useState(0)  
     if(index > 20){
        index = 0
     }if(index < 0 ){
        index = 20
     }
     console.log(index)
    return<div>
        <section className="Qaxaqakanutyun" >
        <div className="slayder" >
            <div className="slayder-content" style={{backgroundImage:`url(../img/imgslayder/${index}.jpg)`}}>
                <a href="#" className="angle-left" onClick={() =>setindex((prev) =>index - 1)}><i class="fa-solid fa-angle-left"></i></a>
                <a href="#" className="angle-right" onClick={() =>setindex((prev) => index + 1)}><i class="fa-solid fa-angle-right"></i></a>
            </div>
        </div>
        </section>
    </div>
  
}

export function Tntesutyun(){
    return<div>
        Tntesutyun
        </div>
}
export function Hasarakutyun(){
    return<div>Hasarakutyun</div>
}
export function Mshakuyt(){
    return<div>Mshakuyt</div>
}