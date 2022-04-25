import React, { useEffect, useState } from "react";
import styles from "./Victor.module.css";
import Byurakan from "./byurakan";
import {Route, Routes , useNavigate} from "react-router-dom";
import { Text_EIGHT, Text_ELEVEN, Text_FIVE, Text_FIVTEEN, Text_FOUR, Text_FOURTEEN, Text_NINE, Text_ONE, Text_SEVEN, Text_SIX, Text_TEN, Text_THREE, 
    Text_THRTHEEN, Text_TWO, Text_TWOELVE, LIST_SIX_ARR , LIST_SEVEN_MAP} from "./const.js";



function Victor(){   
    const navigate = useNavigate()
   return( 
<>
       <h1 className={styles.anunAzganun}>Վիկտոր Համբարձումյան</h1>
<div className={styles.headEr}>
    <div className={styles.img_1}></div>
        
            <div>
          <ul>
            <li><a onClick={()=>{ 
                navigate('mek')   
             
              }}>1. Կենսագրություն</a></li>
            <li><a onClick={()=>{navigate('erku')}}>2. Գիտական գործունեության հիմնական ուղղությունները</a></li>
            <li><a onClick={()=>{navigate('ereq')}}>3. Մանկավարժական գործունեություն</a></li>
            <li><a onClick={()=>{navigate('chors')}}>4. Գիտա-կազմակերպչական գործունեություն</a></li>
            <li><a onClick={()=>{navigate('hing')}}>5. Հասարակական-քաղաքական գործունեություն</a></li>
            <li><a onClick={()=>{navigate('vec')}}>6. Անդամակցությունը գիտական կազմակերպություններին</a></li>
            <li><a onClick={()=>{navigate('yot')}}>7. Պարգևներ և կոչումներ</a></li>
            <li><a onClick={()=>{navigate('byurakan')}}>Բյուրականի աստղադիտարան</a></li>
         
        </ul>
            </div>
    <Routes>
       <Route path="/" element={<ListNothing/>}/>
       <Route path="mek/*" element={<ListOne/>}/>
       <Route path="erku/*" element={<ListTwo/>}/>
       <Route path="ereq/*" element={<ListThree/>}/>
       <Route path="chors/*" element={<ListFour/>}/>
       <Route path="hing/*" element={<ListFive/>}/>
       <Route path="vec/*" element={<ListSix/>}/>
       <Route path="yot/*" element={<ListSeven/>}/>
       <Route path="byurakan/*" element={<Byurakan/>}/>
   </Routes>
</div>

</>
   );

}



function ListOne(){
    return(
        <div className={styles.list}>
                {Text_ONE} <br/>
                {Text_TWO} <br/>
                {Text_THREE} <br/>
                {Text_FOUR}
        </div>
        
    );
}

function ListTwo(){
    return(
    
           <div className={styles.list}>
            {Text_FIVE} <br/>
            {Text_SIX} <br/>
            {Text_SEVEN} <br/>
            {Text_EIGHT}
            
            
            </div>
    );
}

function ListThree(){
    return(
        <div className={styles.list}>
            {Text_NINE}
        </div>
    );

}
function ListFour(){
    return(
        <div className={styles.list}>
            {Text_TEN}
            <div className={styles.xosq}>
                {Text_ELEVEN} <br/>
                {Text_TWOELVE}
            </div>
        </div>
    );

}
function ListFive(){
    return(
        <div className={styles.list}>
            {Text_THRTHEEN}
        </div>
    );

}
function ListSix(){
    
    return(
        <div className={styles.list}>
            {Text_FOURTEEN}
            
            <ul className={styles.list_ul_1}>
                {LIST_SIX_ARR.map((el, index)=>{
                   return <li key={index}>{el}</li>
                })}
                
            </ul>
        </div>
    );

}
function ListSeven(){
    return(
        <div className={styles.list}>
            <ul className={styles.list_ul_2}>
            {LIST_SEVEN_MAP.map((el, index)=>{
                return <li key={index}>{el}</li>
            })}
            </ul>
            {Text_FIVTEEN}
        </div>
    );

}
function ListNothing(){
    return(
        <></>
    )
};



export default Victor