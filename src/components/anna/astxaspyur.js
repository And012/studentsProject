import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "./Victor.module.css";
import {
  setInfo,
  setInfoO_Type,
  setInfoR_Type,
  setInfoT_Type,
} from "./astxaState";

export default function AstxaSpyur() {
  const [fullInfo, setFullInfo] = useState(true);
  const [oType, setOType] = useState(true);
  const [rType, setRType] = useState(true);
  const [tType, setTType] = useState(true);
  const info = useSelector((state) => {
    return state.astxaState.information;
  });
  const image = useSelector((state) => {
    return state.astxaState.image;
  });
  const dispatch = useDispatch();
  // useEffect(()=>{setFullInfo(false)}, [fullInfo])
  return (
    <>
      <div className={styles.list}>{info}</div>
      <div className={styles.star_type}>
        {fullInfo && (
          <Button
            size="large"
            variant="text"
            onClick={() => {
              return (
                dispatch(setInfo()),
                setFullInfo(false),
                setOType(true),
                setRType(true),
                setTType(true)
              );
            }}
          >
            Աստղասփյուռներ
          </Button>
        )}
        {oType && (
          <Button
            size="large"
            variant="text"
            onClick={() => {
              return (
                dispatch(setInfoO_Type()),
                setFullInfo(true),
                setOType(false),
                setRType(true),
                setTType(true),
                console.log(fullInfo)
              );
            }}
          >
            O տիպի
          </Button>
        )}
        {tType && (
          <Button
            size="large"
            variant="text"
            onClick={() => {
              return (
                dispatch(setInfoT_Type()),
                setFullInfo(true),
                setOType(true),
                setRType(true),
                setTType(false)
              );
            }}
          >
            T տիպի
          </Button>
        )}

        {rType && (
          <Button
            size="large"
            variant="text"
            onClick={() => {
              return (
                dispatch(setInfoR_Type()),
                setFullInfo(true),
                setOType(true),
                setRType(false),
                setTType(true)
              );
            }}
          >
            R տիպի{" "}
          </Button>
        )}
      </div>
      <div className={styles.astxImage}>
        <img src={image} />
      </div>
    </>
  );
}
