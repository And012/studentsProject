import { Route, Routes, useNavigate } from "react-router-dom";
import Victor from "./components/anna/glxavor";
import Charents from "./components/Christine/Charents";
import Sahyan from "./components/rima/Sahyan";
import Sevak from "./components/artur";
import Mecarenc from "./components/styop";
// inch vor ban
const arr = [
  { name: "charenc", path: "charenc" },
  { name: "viktor hambardzumyan", path: "viktor" },
  { name: "charenc", path: "charenc" },
  { name: "charenc", path: "charenc" },
  { name: "charenc", path: "charenc" },
];
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div onClick={() => navigate("charenc")}>charenc</div>
        <div onClick={() => navigate("viktor")}>viktor Hambardzumyan</div>
        <div onClick={() => navigate("sahyan")}>Sahyan</div>
        <div onClick={() => navigate("sevak")}>Sevak</div>
        <div onClick={() => navigate("misak")}>Misak Mecarenc</div>
      </div>
      <Routes>
        <Route path="/" element={<div>this is main component</div>} />
        <Route path="charenc/*" element={<Charents />} />
        <Route path="viktor/*" element={<Victor />} />
        <Route path="sahyan/*" element={<Sahyan />} />
        <Route path="sevak/*" element={<Sevak />} />
        <Route path="misak/*" element={<Mecarenc />} />
      </Routes>
    </div>
  );
}

export default App;
