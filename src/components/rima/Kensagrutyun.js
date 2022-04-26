import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/sahyan.module.scss";

function Kensagrutyun() {
  const navigate = useNavigate;
  const about = (
    <div>
      <h1>Կենսագրություն</h1>
      <p>
        <i>
          Համո Սահյանը ծնվել է 1914 թվականի ապրիլի 14-ին Սիսիանի շրջանի (այժմ՝
          Սյունիքի մարզ) Լոր գյուղում։ Սահյանը սկզբնական կրթությունը ստացել է
          տեղի դպրոցում, որտեղ իբրև ուսուցիչ աշխատել էին բանաստեղծներ Գառնիկ
          Քալաշյանը և Ակսել Բակունցը։ 1927 թվականին Հ. Սահյանը տեղափոխվել է
          Բաքու, որտեղ ստացել է միջնակարգ կրթություն։ 1935 թվականին ընդունվել և
          1939 թվականին ավարտել է Բաքվի մանկավարժական ինստիտուտի հայկական
          բաժանմունքը։ 1939-1941 թվականներին աշխատել է Բաքվի «Խորհրդային գրող»
          ամսագրում որպես գրական աշխատող։ Որպես Կասպիական նավատորմի նավաստի,
          մասնակցել է նաև Հայրենական մեծ պատերազմին (1941–1945 թթ.)։ 1944
          թվականին Ստեփան Զորյանի հրավերով գալիս է Երևան և բնակություն հաստատում
          նրա տանը։ Հենց Զորյանի օգնությամբ է Սահյանը ստեղծել իր առաջին գիրքը՝
          «Որոտանի եզերքին» վերնագրով։ 1965-1967 թվականներին եղել է «Գրական
          թերթ»-ի գլխավոր խմբագիրը։ Մահացել է 1993 թվականի հուլիսի 17-ին
          Երևանում։ Նրա աճյունը տեղ է գտել Կոմիտասի անվան պանթեոնում։
        </i>{" "}
      </p>
    </div>
  );

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.child}>
          <div className={styles.left}>
            <a href="/sahyan">
              <i class="fa-solid fa-circle-arrow-left"></i>
            </a>
          </div>
          <div className={styles.child1}></div>
          <div className={styles.child2}>{about}</div>
          <div className={styles.right}>
            <a href="grakanGorcuneutyun">
              <i class="fa-solid fa-circle-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kensagrutyun;
