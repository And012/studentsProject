import React from 'react'
import { Route, Routes,useNavigate } from 'react-router-dom';
import './Sahyan.css';
import Kensagrutyun from './Kensagrutyun';
import GrakanGorcuneutyun from './GrakanGorcuneutyun';
import Banastexcutyunner from './Banastexcutyunner';
import SahyaniMasin from './SahyaniMasin';
import Hishatak from './Hishatak';

function Sahyan() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Info />} />
        <Route path="kensagrutyun/*" element={<Kensagrutyun />} />
         <Route path="grakanGorcuneutyun/*" element={<GrakanGorcuneutyun />} />
        <Route path="banastexcutyunner/*" element={<Banastexcutyunner />} />
        <Route path="sahyaniMasin/*" element={<SahyaniMasin />} />
        <Route path="hishatak/*" element={<Hishatak />} />
      </Routes> 
</>
  )
}

 function Info(){
  const navigate = useNavigate()
  const poem =
   <div  className='item_2'>
  <p>…Եվ հոգնաշավիղ աշխարհների մեջ
      Ինչ կաչերով էլ ականջս շահեն,

      Ինչ սերերով էլ սիրտս պաշարեն,

      Ինչ համերով էլ կաշառեն լեզուս,

      Շաղոտ շուրթերով՝ շարականաշուք

      Քո շշուկներն են կրկնելու նորից…</p>
<div className='img'></div>
  </div>
  return(
    <>
     <div className='container'>
  <section className='items'>
<div className='item_1'>
<h2 >Համո Սահյան</h2>
<div className='item_1_img'></div>
<table className='table' >
<tr >
  <th>Ծննդյան անուն</th>
  <td >Հմայակ Սահակի Գրիգորյան</td>
</tr>
<tr>
  <th>Ծնվել </th>
<td> ապրիլի 14, 1914</td>
</tr>
<tr>
  <th>Ծննդավայր</th>
  <td>Լոր, Զանգեզուրի գավառ, Ելիզավետպոլի նահանգ, Ռուսական կայսրություն</td>
</tr>
<tr>
  <th>Վախճանվել է</th>
  <td>հուլիսի 17, 1993 (79 տարեկան)</td>
</tr>
<tr>
  <th>Վախճանի վայր</th>
  <td>Երևան, Հայաստան[3]</td>
</tr>
<tr>
  <th>Գերեզման</th>
  <td>Գերեզման Համո Սահյանի և Կոմիտասի անվան զբոսայգու պանթեոն</td>
</tr>
<tr>
  <th>Մասնագիտություն	</th>
  <td>բանաստեղծ և թարգմանիչ</td>
</tr>
<tr>
  <th>Ազգություն</th>
  <td>հայ</td>
</tr>
<tr>
  <th>Քաղաքացիություն</th>
  <td>Ռուսական կայսրություն,  ԽՍՀՄ և Հայաստան</td>
</tr>
<tr>
  <th>Կրթություն</th>
  <td>Ադրբեջանի պետական մանկավարժական համալսարան (1939)</td>
</tr>
<tr>
  <th>Անդամակցություն	</th>
  <td>ԽՍՀՄ Գրողների միություն</td>
</tr>
<tr>
  <th>Կուսակցությու</th>
  <td>ԽՄԿԿ</td>
</tr>
<tr>
  <th>Աշխատավայր</th>
  <td>Ավանգարդ, Ոզնի և Գրական թերթ</td>
</tr> 
</table>
</div>
<div className='items_2'>{poem}</div>
<div className='items_3'>
  <div className='item_3'>
 <ul className='ul'>
   <li><a href='#' onClick={() => navigate("kensagrutyun")}>Կենսագրություն</a></li>
   <li><a  href='#'onClick={() => navigate("grakanGorcuneutyun")}>Գրական գործունեություն</a></li>
   <li><a  href='#'onClick={() => navigate("banastexcutyunner")}>Բանաստեղծություններ</a></li>
   <li><a  href='#'onClick={() => navigate("sahyaniMasin")}>Համո Սահյանի մասին</a></li>
   <li><a  href='#'onClick={() => navigate("hishatak")}>Հիշատակ</a></li>
        </ul>
        </div>
</div>
</section>
</div>
    </>
  )
} 
 


export default Sahyan
 