import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import {Glxavor,Qaxaqakanutyun,Tntesutyun,Hasarakutyun,Mshakuyt} from './components/menu'
import './index.css'
import { Kensahrutyun,Irmasin,Sashxatanq,Banarvest,Grakanutyun,obj } from './text'

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
               <ul id='menu-content'>
                   <li><a href='#'onClick={() => navigate("Glxavor")}>Գլխավոր</a></li>
                   <li><a href='#'onClick={() => navigate("Qaxaqakanutyun")}>Քաղաքականություն</a></li>
                   <li><a href='#'onClick={() => navigate("Tntesutyun")}>Տնտեսություն</a></li>
                   <li><a href='#'onClick={() => navigate("Hasarakutyun")}>Հասարակություն</a></li>
                   <li><a href='#'onClick={() => navigate("Mshakuyt")}>Մշակույթ</a></li>
                   <li id='icon'>
                       <a href='#'></a>
                       <a href='#'></a>
                       <a href='#'></a>
                    </li>
               </ul>
            </div>
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
                      <li><a href='#' onClick={() => navigate('Kensahrutyun')}>Կենսագրություն</a></li>
                      <li><a href='#' onClick={() => navigate('Irmasin')}>Միսաք Մեծարենցի մասին</a></li>
                      <li><a href='#' onClick={() => navigate('Sashxatanq')}>Ստեղծագործական աշխատանք</a></li>
                      <li><a href='#' onClick={() => navigate('Banarvest')}>Մեծարենցի բանարվեստը</a></li>
                      <li className='list-v'><a href='#' onClick={() =>navigate('Grakanutyun')}>Գրականություն</a></li>
                  </ul>
                  <h2>Միսաք Մեծարենց</h2>
                      <Routes>
                          <Route path='/' element={<div className='content-cont'>{obj.Kensahrutyun}</div>}/>
                          <Route path='Kensahrutyun' element={ <div className='content-cont'>{obj.Kensahrutyun}</div>  }/>
                          <Route path='Irmasin' element={<div className='content-cont'>{obj.Irmasin}</div> }/>
                          <Route path='Sashxatanq' element={<div className='content-cont'>{obj.Sashxatanq}</div> }/>
                          <Route path='Banarvest' element={<div className='content-cont'>{obj.Banarvest}</div> }/>
                          <Route path='Grakanutyun' element={<div className='content-cont'>{obj.Grakanutyun}</div> }/>
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
                <ul>
                    <li><a href='https://www.facebook.com/maytni.groxner' target='_blank'><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href='https://www.instagram.com/hay_mec_groxner_/' target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href='https://twitter.com/Sevak1924' target='_blank'><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href='https://www.youtube.com/watch?v=9zhnS6U_s2E' target='_blank'><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href='https://t.me/s/hmtorum' target='_blank'><i class="fa-brands fa-telegram"></i></a></li>  
                </ul>
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
                    <li><a href='#'>Մատուցվող ծառայություններ</a></li>
                    <li><a href='#'>Կարգավորում</a></li>
                    <li><a href='#'>Գաղտնիության քաղաքականություն</a></li>
                    <li><a href='#'>Հաճախորդների իրավունքները</a></li>
                </ul>
                <ul>
                    <li><a href='#'>Էքսկլյուզիվ</a></li>
                    <li><a href='#'>Քաղաքականություն</a></li>
                    <li><a href='#'>Մամուլի Տեսություն</a></li>
                    <li><a href='#'>Մշակութային հավելված</a></li>
                </ul>
                <ul>
                    <li><a href='#'>Մամուլը մեր մասին</a></li>
                    <li><a href='#'>Կայքի քարտեզ</a></li>
                    <li><a href='#'>Հաճախ տրվող հարցեր</a></li>
                    <li><a href='#'>Հետադարձ կապ</a></li>
                </ul>
            </div>
        </div>
    </div>
}