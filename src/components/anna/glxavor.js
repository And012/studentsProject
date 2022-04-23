import React, { useEffect, useState } from "react";
import './victor.css';
import Byurakan from "./byurakan";
import {Route, Routes , useNavigate} from "react-router-dom";
import { listChors, listChors1, listChors2, listEreq, listErku, listErku1, listErku2, listErku3, listHing, listMek, listMek1, listMek2, listMek3, listVec, listYot } from "./text";



function Victor(){   
    const navigate = useNavigate()
   return( 
<>
       <h1 id="title">Վիկտոր Համբարձումյան</h1>
<div className="header">
    <div id="img1"></div>
        
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
        <div className="list">
                {listMek} <br/>
                {listMek1} <br/>
                {listMek2} <br/>
                {listMek3}
        </div>
        
    );
}

function ListTwo(){
    return(
    
           <div className="list">
            {listErku} <br/>
            {listErku1} <br/>
            {listErku2} <br/>
            {listErku3}
            
            
            </div>
    );
}

function ListThree(){
    return(
        <div className="list">
            {listEreq}
        </div>
    );

}
function ListFour(){
    return(
        <div className="list">
            {listChors}
            <div className="xosq">
                {listChors1} <br/>
                {listChors2}
            </div>
        </div>
    );

}
function ListFive(){
    return(
        <div className="list">
            {listHing}
        </div>
    );

}
function ListSix(){
    return(
        <div className="list">
            {listVec}
            <ul style={{padding: '15px', margin: '15px 150px',}}>
                <li>1. Ավստրիայի գիտությունների ակադեմիա</li>
                <li>2. Ադրբեջանի ԽՍՀ գիտությունների ակադեմիա</li>
                <li>3. Բելգիայի գիտությունների ակադեմիա</li>
                <li>4. Բուլղարիայի գիտությունների ակադեմիա (1974)</li>
                <li>5. Գերմանիայի դեմոկրատական հանրապետության գիտությունների ակադեմիա</li>
                <li>6. Վրաստանի գիտությունների ակադեմիա</li>
                <li>7. Դանիայի գիտությունների ակադեմիա</li>
                <li>8. Իտալիայի գիտությունների ակադեմիա</li>
                <li>9. Լոնդոնի թագավորական ընկերություն</li>
                <li>10. Նիդեռլանդների գիտությունների ակադեմիա</li>
                <li>11. Ամերիկյան աստղագիտական ընկերություն</li>
                <li>12. Քեմբրիջի փիլիսոփայական ընկերություն</li>
                <li>13. Լա-Պլատայի համալսարան</li>
                <li>14. Փարիզի համալսարան</li>
                <li>15. Նիկոլայ Կոպեռնիկոսի անվան Տորունի համալսարան</li>
            </ul>
        </div>
    );

}
function ListSeven(){
    return(
        <div className="list">
            <ul style={{padding: '15px', margin: '15px 130px',}}>
                <li>Հայաստանի ազգային հերոս </li>
                <li>Սոցիալիստական աշխատանքի կրկնակի հերոս </li>
                <li>Երկրորդ աստիճանի Ստալինյան մրցանակ </li>
                <li>Ստալինյան առաջին աստիճանի մրցանակ (1974)</li>
                <li>Ռուսաստանի Դաշնության պետական մրցանակ</li>
                <li>Հայաստանի ԽՍՀ պետական մրցանակ </li>
                <li>Հինգ Լենինի շքանշան</li>
                <li>Հոկտեմբերյան հեղափոխության շքանշան</li>
                <li>Աշխատանքային Կարմիր դրոշի երկու շքանշան</li>
                <li>Պատվո շքանշան</li>
                <li>«Աշխատանքային արիության համար» մեդալ </li>
                <li>Լեհաստանի Հանրապետության Վաստակի շքանշանի կոմանդոր</li>
                <li>Հայաստանի ԽՍՀ գիտության վաստակավոր գործիչ </li>
                <li>Ֆրանսիական աստղագիտական ընկերության Ժյուլ Ժանսենի մրցանակ</li>
                <li>Վրաստանի ԽՍՀ գիտության վաստակավոր գործիչ</li>
                <li>ԽՍՀՄ գիտությունների ակադեմիայի Վավիլովի անվան ոսկե մեդալ</li>
                <li>Սլովակիայի գիտությունների ակադեմիայի ոսկե մեդալ </li>
                <li>ԽՍՀՄ գիտությունների ակադեմիայի Լոմոնոսովի անվան մեծ ոսկե մեդալ </li>
                <li>Բեռլինում Գերմանիայի գիտությունների ակադեմիայի Հելմհոլցի անվան ոսկե մեդալ</li>
            </ul>
            {listYot}
        </div>
    );

}
function ListNothing(){
    return(
        <></>
    )
};



export default Victor