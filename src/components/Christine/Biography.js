import { useNavigate } from "react-router-dom";
import { info } from "./Charents";
import "./Charents.css";
function Bio() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <h2 style={{ margin: "10px 0" }}>Կենսագրություն</h2>
        <a href="/charenc">հետ վերադառնալ գլխավոր էջ</a>
        <hr />
        <p className="bio1">{info.bio}</p>
      </div>
    </>
  );
}
export default Bio;
