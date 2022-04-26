import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Kensagrutyun from "./Kensagrutyun";
import GrakanGorcuneutyun from "./GrakanGorcuneutyun";
import Banastexcutyunner from "./Banastexcutyunner";
import SahyaniMasin from "./SahyaniMasin";
import Hishatak from "./Hishatak";
import styles from "./styles/sahyan.module.scss";

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
  );
}

function Info() {
  const navigate = useNavigate();
  const poem = (
    <div className={styles.item_2}>
      <p>
        …Եվ հոգնաշավիղ աշխարհների մեջ Ինչ կաչերով էլ ականջս շահեն, Ինչ սերերով
        էլ սիրտս պաշարեն, Ինչ համերով էլ կաշառեն լեզուս, Շաղոտ շուրթերով՝
        շարականաշուք Քո շշուկներն են կրկնելու նորից…
      </p>
      <div className={styles.img}></div>
    </div>
  );
  let arr1 = [
    ["Ծննդյան անուն", "Հմայակ Սահակի Գրիգորյան"],
    ["Ծնվել է", "ապրիլի 14, 1914"],
    [
      "Ծննդավայր",
      "Լոր, Զանգեզուրի գավառ, Ելիզավետպոլի նահանգ, Ռուսական կայսրություն",
    ],
    ["Վախճանվել է", "հուլիսի 17, 1993 (79 տարեկան)"],
    ["Վախճանի վայր", "Երևան, Հայաստան"],
    ["Գերեզման", "Գերեզման Համո Սահյանի և Կոմիտասի անվան զբոսայգու պանթեոն"],
    ["Մասնագիտություն", "բանաստեղծ և թարգմանիչ"],
    ["Ազգություն", "հայ"],
    ["Քաղաքացիություն", "Ռուսական կայսրություն, ԽՍՀՄ և Հայաստան"],
    ["Կրթություն", "Ադրբեջանի պետական մանկավարժական համալսարան (1939)"],
    ["Անդամակցություն", "ԽՍՀՄ Գրողների միություն"],
    ["Կուսակցությու", "ԽՄԿԿ"],
    ["Աշխատավայր", "Ավանգարդ, Ոզնի և Գրական թերթ"],
  ];

  let arr2 = [
    { name: "Կենսագրություն", path: "kensagrutyun" },
    { name: "Գրական գործունեություն", path: "grakanGorcuneutyun" },
    { name: "Բանաստեղծություններ", path: "banastexcutyunner" },
    { name: "Համո Սահյանի մասին", path: "sahyaniMasin" },
    { name: "Հիշատակ", path: "hishatak" },
  ];
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.error}></div> */}
        <section className={styles.items}>
          <div className={styles.item_1}>
            <h2>Համո Սահյան</h2>
            <div className={styles.item_1_img}></div>
            <table className={styles.table}>
              {arr1.map(([first, second]) => {
                return (
                  <tr key={first + second}>
                    <th>{first}</th>
                    <td>{second}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className={styles.items_2}>{poem}</div>
          <div className={styles.items_3}>
            <div className={styles.item_3}>
              <ul className={styles.ul}>
                {arr2.map(({ name, path }) => {
                  return (
                    <li key={name + path}>
                      <a href="#" onClick={() => navigate(path)}>
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Sahyan;
