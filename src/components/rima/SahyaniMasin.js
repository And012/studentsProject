import React from "react";
import styles from "./styles/sahyan.module.scss";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

function SahyaniMasin() {
  const about5 = (
    <div>
      <h1>Համո Սահյանի մասին</h1>
      <p>
        <i>
          Համո Սահյանի պոեզիան շարունակում է սնել ընթերցողներին, ապաքինում է
          նրանց վիրավոր քայքայված նյարդերն ու հոգիները...
        </i>
      </p>
      <br />
      <p>
        <b>~Ռազմիկ Դավոյան</b>
      </p>
      <br />
      <p>
        <i>
          Բախտավոր բանաստեղծ է Համո Սահյանը. ընթերցողի սիրտը բաց է եղել նրա
          առջև, նրան սիրում են անդավաճան... Ասմունքողների սիրած բանաստեղծն է...
          Ինձ համար գաղտնիք է մնում, թե Սահյանն ինչպես է կարողանում հասարակ
          խոսակցության լեզվով բարդ ու խորունկ մտքեր բյուրեղացնել... Ինչպես է
          կարողանում «մաշված» բառերին առաջին գործածության թարմություն հաղորդել։
          Ինչպես է բառերի վրա դնում իմաստային մեծ բեռ, և բառերը... թեթև ու վստահ
          տանում են իրենց բեռը... Խոսքի վարպետը գիտե իր գործը... Հ. Սահյանը նման
          էր իր պոեզիային, ինչպես իր պոեզիան իրեն...
        </i>
      </p>
      <br />
      <p>
        <b>~Լևոն Հախվերդյան</b>
      </p>
      <br />
      <p>
        <i>
          Համո Սահյանը ճիշտ մարդ էր, իր կռվի ժամին կռվեց, խաղի ժամին խաղաց ու
          խայտաց, խոստովանանքի իր պահը՝ որ դիմագիծ է պարգևում ճշմարիտ
          գրականությանը՝ բավական երկարատև էր, և հեռանալու ժամին հեռացավ...
        </i>
      </p>
      <br />
      <p>
        <b>~Հրանտ Մաթևոսյան</b>
      </p>
      <br />
      <p>
        <i>
          Զանգեզուրյան կիրճերից մեկում ծվարած Լորից եկավ այդ բանաստեղծը՝ Համո
          Սահյանը։ Ոչ, սոսկ բնանկարներ չէ, որ Սահյանը բերեց մեր պոեզիային, այդ
          բնանկարների ծալքերում, նրա ամենախոշոր շերտերում մի արդար ու բարի, մեծ
          ու ազնիվ հոգու շարժում կա, հոգու ամբողջ մի պատմություն, իսկ ճշմարիտ
          բանաստեղծությունը ոչ այլ ինչ է, եթե ոչ պատկերների խորքում թաքնված
          հոգու պատմություն...
        </i>
      </p>
      <br />
      <p>
        <b>~Վահագն Դավթյան</b>
      </p>
    </div>
  );
  return (
    <>
    <AccessibleTabs1 />
      <div className={styles.parent5}>
        <div className={styles.parent5_child1}>
          <div className={styles.left}>
            <a href="banastexcutyunner">
              <i class="fa-solid fa-circle-arrow-left"></i>
            </a>
          </div>
          {about5}
          <div className={styles.right}>
            <a href="hishatak">
              <i class="fa-solid fa-circle-arrow-right"></i>
            </a>
          </div>
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
export default SahyaniMasin;
