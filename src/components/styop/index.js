import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './index.css'
import { Kensahrutyun,Irmasin,Sashxatanq,Banarvest,Grakanutyun } from './text'

export default function Mecarenc(){
    return <div>
         <Nav />
         <Main />
         <Footer/>
    </div>
}

function Nav(){
    return <div>
        <nav className="nav">
            <div id='logo'>
                <a href='#'></a>
            </div>
            <div id='menu'>
               <ul id='menu-content'>
                   <li><a href='#'>Գլխավոր</a></li>
                   <li><a href='#'>Քաղաքականություն</a></li>
                   <li><a href='#'>Տնտեսություն</a></li>
                   <li><a href='#'>Հասարակություն</a></li>
                   <li><a href='#'>Մշակույթ</a></li>
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
                          <Route path='Kensahrutyun' element={ <div className='content-cont'>{Kensahrutyun}</div>  }/>
                          <Route path='Irmasin' element={<div className='content-cont'>{Irmasin}</div> }/>
                          <Route path='Sashxatanq' element={<div className='content-cont'>{Sashxatanq}</div> }/>
                          <Route path='Banarvest' element={<div className='content-cont'>{Banarvest}</div> }/>
                          <Route path='Grakanutyun' element={<div className='content-cont'>{Grakanutyun}</div> }/>
                      </Routes>
                
                </div>
         </div>
        
    </div>
}


function Footer(){
    return <div>
        
    </div>
}