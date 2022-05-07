import { useSelector } from "react-redux";
import styles from "./Victor.module.css"


export default function AstxaSpyur(){
    const info = useSelector((state)=>{return state.astxaState.information});
    const image = useSelector((state)=>{return state.astxaState.image})
    return(
        <>
        <div className={styles.list}>{info}</div>
        <div className={styles.astxImage}><img src={image}/></div>
        </>
    );
}