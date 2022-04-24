import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Bio from "./Biography";
import Life from "./Life";
import Name from "./Name";
import  INFO, {mainInfo}  from "./Constant/Constant";
import styles from "./styles/Charents.module.css"


function Charents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="bio" element={<Bio />} />
        <Route path="life" element={<Life />} />
        <Route path="name" element={<Name />} />
      </Routes>
    </>
  );
}

function Main() {
  const navigate = useNavigate();
  return (
    
    <>
    <nav className={styles.chNav}>
      <ul className={styles.ch_ul}>
        <li onClick={() => {
          navigate("/charenc/")
        }}>Գլխավոր</li>
        <li onClick={() => {
          navigate("name")
        }}>Գրական անուն</li>
        <li onClick={() => {
          navigate("bio")
        }}>Կենսագրություն</li>
        <li onClick={() => {
          navigate("life")
        }}>Անձնական կյանք</li>

      </ul>
    </nav>
     
      <div className={styles.container}> 
      <h1 style={{ color: "#3c3b3b", fontFamily: "cursive" }}>Եղիշե Չարենց</h1>
        <section className={styles.mainItem}>
          <div className={styles.right}>
            {mainInfo.map(([first,second, third] , index) => {
              return <div key={index}>
                <h2 className={styles.branches}>{first}</h2>
                <a className={styles.more} href="/charenc/name">
                {second}
                </a>
                <hr />
                <p className={styles.bio}>{third}</p>
              </div> 
            })}
            
          </div>
          <div className={styles.leftMain}>
            <div className={styles.left}>
              <h2 className={styles.header}>
                Եղիշե Չարենց
              </h2>
              <div className={styles.pic1}></div>
              <table style={{ width: "290px" }}>
                <tbody>
                {INFO.tableInfo.map(([first,second] , index) => {
                  return <tr key={index}>
                    <th className={styles.th}>{first}</th>
                    <td className={styles.td}>{second}</td>
                  </tr>
                })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Charents;
