import { useState } from "react"
import {useNavigate } from 'react-router-dom'
import { arrimg,norut,norut2} from "../text"



export default function Menu(){
    return <div>
    </div>
}

export function Qaxaqakanutyun(){  
    const navigate = useNavigate()
    const [index,setindex] = useState(0)
    const norutyunhref = [["https://www.youtube.com/watch?v=93wAfYyD7NI&t=11s"],[]]
    return<div>
        <section className="Qaxaqakanutyun" > 
        <h2>Քաղաքականություն</h2>
        <div className="slayder" >
           <div className="slayder-content-left">
              {norut.map(([images,vern,texts],index) =>{
                  return  <a href='' className="libs">
                      <div key={index} className='slayder-content-left-content'>
                      <div style={{backgroundImage:`url('${images}')`}} className="imgnorut"></div>
                      <div className="lists-content-slayd" >
                          <h5>{vern}</h5>
                          <p>{texts}</p>
                      </div>
                  </div>
                  </a>
              })}
             
           </div>
            <div className="slayder-content" style={{backgroundImage:`url("${arrimg[index]}")`}}>
                <a href="#" className="angle-left" onClick={() =>{
                    if(index <= 0){
                        setindex(arrimg.length - 1)
                    }else{
                         setindex(index - 1)
                    }
                }}><i class="fa-solid fa-angle-left"></i></a>
                <a href="#" className="angle-right" onClick={() =>{
                    if(index >= arrimg.length - 1){
                        setindex(0)
                      }else{
                        setindex(index + 1)
                     }
                    }}><i class="fa-solid fa-angle-right"></i></a>
            </div>
            <div className="slayder-content-right">
             {norut2.map(([images,vern,texts],index) =>{
                  return  <a href='' className="libs">
                      <div key={index} className='slayder-content-left-content'>
                      <div style={{backgroundImage:`url('${images}')`}} className="imgnorut"></div>
                      <div className="lists-content-slayd" >
                          <h5>{vern}</h5>
                          <p>{texts}</p>
                      </div>
                  </div>
                  </a>
              })}

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