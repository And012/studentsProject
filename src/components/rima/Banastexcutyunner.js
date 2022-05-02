import React from "react";
import styles from "./styles/sahyan.module.scss";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
function Banastexcutyunner() {
  const about3 = (
    <div>
      <h1>Բանաստեղծություններ</h1>
      <p>
        <i>
          Համո Սահյանի ստեղծագործության մեջ մեծ թիվ են կազմում անցյալին,
          մանկությանը նվիրված բանաստեղծությունները, որոնք ունեն արդիական
          իմաստավորում, հասարակական հնչեղություն։ Նա իրեն հատուկ բառամթերքով
          անդրադարձնելով իր զգայական աշխարհը` հասնում է լեզվաոճական
          ինքնատիպության ու կայունության։ Նա թարգմանել է Ա. Պուշկինի, Ս.
          Եսենինի, Գ. Լորկայի և այլ բանաստեղծների ստեղծագործություններից։
          Սահյանի բանաստեղծություններում անձինք են համարվում անձրևը, ծառը,
          կայծակը, գետը, լիճը և այլն։
        </i>
      </p>
    </div>
  );
  let arr = [
    { name: "Ախր ես ինչպես վեր կենամ գնամ" },
    { name: "Անունդ տալիս" },
    { name: "Անտառում" },
    { name: "Գարունդ հայերեն է գալիս" },
    { name: "Եվ չիմացանք, թե ինչու" },
    { name: "Թռավ գնաց" },
    { name: "Հայաստան ասելիս" },
    { name: "Հայոց լեզու" },
    { name: "Հայրենական տուն" },
    { name: "Հայրենի հեռավոր ձորում" },
    { name: "Մեր լեզուն" },
    { name: "Նաիրյան դալար բարդի" },
    { name: "Ուր էլ որ գնամ" },
    { name: "Պապը" },
    { name: "Քարափը" },
    { name: "Մասրենին" },
    { name: "Երևան" },
    { name: "Արաքս" },
    { name: "Ուր որ նայում եմ" },
    { name: "Տար ինձ, ժամանակ" },
    { name: "Այս քարանձավներն" },
    { name: "Սարահովիտ" },
    { name: "Երեխայի պես" },
  ];
  return (
    <>
    <AccessibleTabs1 />
      <div className={styles.parent3}>
        <div className={styles.left}>
          <a href="grakanGorcuneutyun">
            <i class="fa-solid fa-circle-arrow-left"></i>
          </a>
        </div>

        <div className={styles.parent3_child1}>
          {about3}
          <ul>
            {arr.map(({ name }) => {
              return <li key={name}>{name}</li>;
            })}
            <span>... ... ...</span>
          </ul>
        </div>
        <div className={styles.right}>
          <a href="sahyaniMasin">
            <i class="fa-solid fa-circle-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
}
function AccessibleTabs1() {
  const navigate = useNavigate()
const [value, setValue] = React.useState(0);
const handleChange = (event, newValue) => {
  setValue(newValue);
};
return (
  <Box sx={{ width: '100%' }}>
    <Tabs
      onChange={handleChange}
      value={value}
      aria-label="Tabs where selection follows focus"
      selectionFollowsFocus
    >
      <Tab label="Գլխավոր էջ" onClick={()=> navigate("/sahyan")}/>
    </Tabs>
    
  </Box>
);
}
export default Banastexcutyunner;
