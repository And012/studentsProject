import React from "react";
import styles from "./styles/sahyan.module.scss";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

function Hishatak() {
  const about4 = (
    <div>
      <h1>Հիշատակ</h1>
      <p>
        <i>
          2014 թվականի ապրիլի 14-ին՝ բանաստեղծի 100-ամյակին, նրա հայրենի
          գյուղում՝ Լորում, բացվել է տուն-թանգարան։ Թանգարանը երկհարկանի է,
          առաջին հարկում ցուցադրված են գյուղացիների կենցաղային իրերը, երկրորդ
          հարկում՝ Համո Սահյանի անձնական իրերը, բանաստեղծությունների
          ժողովածուները։ Ներկայումս թանգարանը շարունակում է համալրվել նոր
          ցուցանմուշներով։ Համո Սահյանի անունն է կրում Երևանի Արաբկիր վարչական
          շրջանի փողոցներից մեկը, Երևանի №70 հիմնական դպրոցը։ Սիսիանում կա նաև
          Համո Սահյանին նվիրված հուշարձան։ 2007 թվականին Երևանի Կասյան փողոցում
          տեղադրվել է Համո Սահյանի հուշատախտակը, որի քանդակագործն է Գետիկ
          Բաղդասարյանը։ 1975 թվականին գեղանկարիչ Հրանտ Ստեփանյանը վրձնել է Համո
          Սահյանի դիմանկարը, որը գտնվում է Չարենցի անվան արվեստի և գրականության
          թանգարանում։
        </i>
      </p>
    </div>
  );
  return (
    <>
    <AccessibleTabs1 />
      <div className={styles.parent4}>
        <div className={styles.left}>
          <a href="sahyaniMasin">
            <i class="fa-solid fa-circle-arrow-left"></i>
          </a>
        </div>

        <div className={styles.parent4_child1}>{about4}</div>
        <div className={styles.right}>
          <a href="/sahyan">
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


export default Hishatak;
