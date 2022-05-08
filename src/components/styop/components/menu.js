import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ARRIMG, news1, news2 } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { setData, setName, setRemove } from "../../../store/rootReducer";
import { selectorSome } from "../../../store/globalstate";

export default function Menu() {
  return <div></div>;
}

export function Qaxaqakanutyun() {
  const navigate = useNavigate();
  const [index, setindex] = useState(0);

  return (
    <div>
      <section className="Qaxaqakanutyun">
        <h2>Քաղաքականություն</h2>
        <div className="slayder">
          <div className="slayder-content-left">
            {news1.map(([images, first, second], index) => {
              return (
                <a href="" className="libs">
                  <div key={index} className="slayder-content-left-content">
                    <div
                      style={{ backgroundImage: `url('${images}')` }}
                      className="imgnorut"
                    ></div>
                    <div className="lists-content-slayd">
                      <h5>{first}</h5>
                      <p>{second}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div
            className="slayder-content"
            style={{ backgroundImage: `url("${ARRIMG[index]}")` }}
          >
            <a
              className="angle-left"
              onClick={() => {
                if (index <= 0) {
                  setindex(ARRIMG.length - 1);
                } else {
                  setindex(index - 1);
                }
              }}
            >
              <i class="fa-solid fa-angle-left"></i>
            </a>
            <a
              className="angle-right"
              onClick={() => {
                if (index >= ARRIMG.length - 1) {
                  setindex(0);
                } else {
                  setindex(index + 1);
                }
              }}
            >
              <i class="fa-solid fa-angle-right"></i>
            </a>
          </div>
          <div className="slayder-content-right">
            {news2.map(([images, first, second], index) => {
              return (
                <a href="" className="libs">
                  <div key={index} className="slayder-content-left-content">
                    <div
                      style={{ backgroundImage: `url('${images}')` }}
                      className="imgnorut"
                    ></div>
                    <div className="lists-content-slayd">
                      <h5>{first}</h5>
                      <p>{second}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export function Tntesutyun() {
  return <div>Tntesutyun</div>;
}
export function Hasarakutyun() {
  const [value,setvalue] = useState('')
  const dispatch = useDispatch();
  const data = useSelector(selectorSome);
  return (
    <section className="Hasarakutyun">
      <h2>Հասարակություն</h2>
      <div className="Hasarakutyun-content">
        <h3>Կորոնավիրուսով վարակված երկներ</h3>
        <button
          onClick={() => {
            axios
              .get("https://api.covid19api.com/countries")
              .then((response) => {
                dispatch(setData(response.data));
              });
          }}
        >
          Սեղմիր...
        </button>
        <button
          onClick={() => {
            dispatch(setRemove());
          }}
        >
          Ջնջել
        </button>
        <input value={value} onChange={(event) => setvalue(event.target.value)}/>
      </div>
     {!value && <div className="covid19">
        {data?.map((el, index) => {
          return (
            <div key={index} className="covid19-content">
              <ul>
                <li>{el.Country + ","}</li>
              </ul>
           </div>
          );
         })}
      </div>}
     {value && <div className="covid19-2">
         {data?.map((el, index) => {
          if(el.Country.toLowerCase().includes(value.toLowerCase())){
          return (
            <div key={index} className="list-covid19">
               <span> {el.Country + ","}</span> 
           </div>
          );
        } })}
        </div> }
    </section>
  );
}
export function Mshakuyt() {
  return <div>Mshakuyt</div>;
}
