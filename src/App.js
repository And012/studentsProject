import { Routes, Route,  useNavigate } from "react-router-dom";
import Victor from "./components/anna/glxavor";
import Charents from "./components/Christine/Charents";
import Sahyan from './components/rima/Sahyan';
import Sevak from './components/artur/index';
import UserName from './components/styop/index'
import { useState } from "react";


function App() {
const navigate = useNavigate()
  return (
    <div className="App">
      <div>
        <ul style={{display: 'flex',
                    lexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '20px'
                    
      }}>
          <li onClick={navigate()}>Եղիշե Չարենց</li>
          <li onClick={navigate()}>Վիկտոր Համբարձումյան</li>
          <li onClick={navigate()}>Համո Սահյան</li>
          <li onClick={navigate()}>Պարույր Սևակ</li>
          <li onClick={navigate()}>Միսաք Մեծարենց</li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<div>Glxavor ej</div>}/>
        <Route path="charenc/*" element={<Charents/>}/>
        <Route path="victor/*" element={<Victor/>}/>
        <Route path="sahyan/*" element={<Sahyan/>}/>
        <Route path="sevak/*" element={<Sevak/>}/>
        <Route path="misak/*" element={<UserName/>}/>
      </Routes>
    </div>
  );
}

export default App;
