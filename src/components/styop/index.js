import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import {Qaxaqakanutyun,Tntesutyun,Hasarakutyun,Mshakuyt} from './components/menu'
import './index.css'
import { Obj,arrmenu1,arrmenu3,arrmenu5,arrmenu4,arrmenu6,arrmenu2} from './text'

export default function Mecarenc(){
    return <div>
        <Nav />
         <Routes>
             <Route path='/*' element={<Main/>}/>
             <Route path='Glxavor' element={<Main/>}/>
             <Route path='Qaxaqakanutyun' element={<Qaxaqakanutyun/> }/>
             <Route path='Tntesutyun' element={ <Tntesutyun/>}/>
             <Route path='Hasarakutyun' element={<Hasarakutyun/>}/>
             <Route path='Mshakuyt' element={ <Mshakuyt/>}/>
        </Routes>
        <Footer/>
    </div>
}

function Nav(){
    const navigate = useNavigate()
    return <div>
               <nav className="nav">
                   <div id='logo'>
                       <a href='#'></a>
                   </div>
                   <div id='menu'>
                        <ul id='menu-content' >
                   {arrmenu1.map(([names,setname],index) =>{
                              return  <li key={index}>
                                 <a href='#' onClick={() => navigate(names)}>{setname} </a>
                                 </li>   
                              
                           
                          })}</ul></div>
               </nav>
             </div>
}

function Main(){
    const navigate = useNavigate()
    return <div className='main'>
         
         <div  className='main-content'>
              <div className='main-content-left'>
                  <div id='img'></div>
              </div>
              <div className='main-content-right'> 

                   <ul className='list'>
                         {arrmenu2.map(([names,setname],index) =>{
                              return <li key={index}>
                                  <a href='#' onClick={() => navigate(names)}>{setname}</a>
                                  </li>
                                  })}  
                                 <li className='list-v'><a href='#' onClick={() =>navigate('Grakanutyun')}>Գրականություն</a></li>
                     </ul>
                  <h2>Միսաք Մեծարենց</h2>
                      <Routes>
                          <Route path='/' element={<div className='content-cont'>{Obj.Kensahrutyun}</div>}/>
                          <Route path='Kensahrutyun' element={ <div className='content-cont'>{Obj.Kensahrutyun}</div>  }/>
                          <Route path='Irmasin' element={<div className='content-cont'>{Obj.Irmasin}</div> }/>
                          <Route path='Sashxatanq' element={<div className='content-cont'>{Obj.Sashxatanq}</div> }/>
                          <Route path='Banarvest' element={<div className='content-cont'>{Obj.Banarvest}</div> }/>
                          <Route path='Grakanutyun' element={<div className='content-cont'>{Obj.Grakanutyun}</div> }/>
                      </Routes>
                
                </div>
         </div>
        
    </div>
}


function Footer(){
     return <div className='footer'>
        <div className='footer-content'>
            <div className='footer-left'>
                <h3>Հայ <span>Մեծեր</span></h3>
                    <div className='footer-left-icon'>
                    {arrmenu6.map(([hrefs,icon],index)=>{
                        return <ul key={index}><li><a href={hrefs} ><i class={icon}></i></a></li></ul>
                    })}
                    </div>
                   <div className='footer-icon'>
                       <a href='#'>
                           <div><i class="fa-brands fa-apple"></i></div>
                           <div>
                               <h6>Download on the</h6>
                               <h5>App Store</h5>
                           </div>
                       </a>
                       <a href='#'>
                           <div><i class="fa-brands fa-google-play"></i></div>
                           <div>
                               <h6>GET IT ON</h6>
                               <h5>Google Play</h5>
                           </div>
                       </a>
                   </div>
            </div>
         
               <div className='footer-right'>
                       <ul>
                         {arrmenu3.map(([names],index) =>{
                          return <li key={index}>
                                <a href='#'>{names}</a>
                                </li>
                          })}
                        </ul>
                        <ul>
                           {arrmenu4.map(([names],index) =>{
                          return <li key={index}>
                                <a href='#'>{names}</a>
                                </li>
                          })}
                         </ul>
                         <ul>
                           {arrmenu5.map(([names],index) =>{
                          return <li key={index}>
                                <a href='#'>{names}</a>
                                </li>
                          })}
                         </ul>
                 </div> 
        </div>
    </div>
}