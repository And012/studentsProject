import { useState } from "react"
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ARRIMG,news1,news2} from "../constant"
import {useDispatch, useSelector} from 'react-redux'
import { setData } from "../../../store/rootReducer"


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
              {news1.map(([images,first,second],index) =>{
                  return  <a href='' className="libs">
                      <div key={index} className='slayder-content-left-content'>
                      <div style={{backgroundImage:`url('${images}')`}} className="imgnorut"></div>
                      <div className="lists-content-slayd" >
                          <h5>{first}</h5>
                          <p>{second}</p>
                      </div>
                  </div>
                  </a>
              })}
             
           </div>
            <div className="slayder-content" style={{backgroundImage:`url("${ARRIMG[index]}")`}}>
                <a  className="angle-left" onClick={() =>{
                    if(index <= 0){
                        setindex(ARRIMG.length - 1)
                    }else{
                         setindex(index - 1)
                    }
                }}><i class="fa-solid fa-angle-left"></i></a>
                <a  className="angle-right" onClick={() =>{
                    if(index >= ARRIMG.length - 1){
                        setindex(0)
                      }else{
                        setindex(index + 1)
                     }
                    }}><i class="fa-solid fa-angle-right"></i></a>
            </div>
            <div className="slayder-content-right">
             {news2.map(([images,first,second],index) =>{
                  return  <a href='' className="libs">
                      <div key={index} className='slayder-content-left-content'>
                      <div style={{backgroundImage:`url('${images}')`}} className="imgnorut"></div>
                      <div className="lists-content-slayd" >
                          <h5>{first}</h5>
                          <p>{second}</p>
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
    // const dispatch = useDispatch()
    return <section className="Hasarakutyun">
        <h2>Hasarakutyun</h2>
        <button onClick={() =>{
            // axios.get("https://api.covid19api.com/countries")
            // .then(response =>{
            //   dispatch(setData(response.data))
            //   console.log(response)
            // })
       }}>sing in</button>
        </section>
}
export function Mshakuyt(){
    return<div>Mshakuyt</div>
}