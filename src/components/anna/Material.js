import {Routes, Route, useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Victor.module.css";
import {Victor_Himnakan} from "./glxavor.js"

export default function Victor_Glxavor() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Card_Function />} />
        <Route path="lists/*" element={<Victor_Himnakan />} />
      </Routes>
    </>
  );
}

function Card_Function() {
const navigate = useNavigate()
  return (
    <div className={styles.cardDiv}>
      <Card sx={{ maxWidth: 345, margin: "10px" }}>
        <CardMedia
          component="img"
          alt="Viktor Hambardzumyan"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Viktor_Hambardzumyan%27s_Father_and_Grandfather.jpg/220px-Viktor_Hambardzumyan%27s_Father_and_Grandfather.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Կենսագրություն
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Վիկտոր Համբարձումյանը ծնվել է Թիֆլիսում, 1908 թվականի սեպտեմբերի
            18-ին։ Հայրը՝ Համազասպ Համբարձումյանը եղել է իրավաբան, գրականագետ։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" >ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={()=>{navigate('lists')}}>ԻՄԱՆԱԼ ԱՎԵԼԻՆ</Button>
        </CardActions>
      </Card>
      <Card sx={{maxWidth: 345, margin: "10px"}}>
        <CardMedia
        component ="img"
        alt="Viktor Hambardzumyan"
        height ="140"
        image="https://upload.wikimedia.org/wikipedia/commons/9/99/%D5%8E%D5%AB%D5%AF%D5%BF%D5%B8%D6%80_%D5%80%D5%A1%D5%B4%D5%A2%D5%A1%D6%80%D5%B1%D5%B8%D6%82%D5%B4%D5%B5%D5%A1%D5%B6_%282%29.JPG"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" compnent="div">Գիտական գործունեության ուղղությունները</Typography>
          <Typography variant="body2" color="text.secondary">Կիրառելով վիճակագրական մեխանիկայի ինքնատիպ եղանակներ՝ Համբարձումյանը կարևոր արդյունքներ է ստացել։</Typography>
        </CardContent>
        <CardActions>
        <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={()=>{navigate('lists')}}>ԻՄԱՆԱԼ ԱՎԵԼԻՆ</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "10px" }}>
        <CardMedia
          component="img"
          alt="Viktor Hambardzumyan"
          height="140"
          image="https://yn.am/disc/05-02-16/86755f93c43809639a9ef71b47d83be0.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Մանկավարժական գործունեություն
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Համբարձումյանը գիտական աշխատանքը զուգակցել է աշխույժ մանկավարժական գործունեության հետ։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={()=>{navigate('lists')}}>ԻՄԱՆԱԼ ԱՎԵԼԻՆ</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "10px" }}>
        <CardMedia
          component="img"
          alt="Viktor Hambardzumyan"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/9/99/%D5%8E%D5%AB%D5%AF%D5%BF%D5%B8%D6%80_%D5%80%D5%A1%D5%B4%D5%A2%D5%A1%D6%80%D5%B1%D5%B8%D6%82%D5%B4%D5%B5%D5%A1%D5%B6_%282%29.JPG"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Գիտա-կազմակերպչական գործունեություն
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Համբարձումյանը գիտության երևելի կազմակերպիչ էր Հայաստանում, Ռուսաստանում և միջազգային ասպարեզում։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={()=>{navigate('lists')}}>ԻՄԱՆԱԼ ԱՎԵԼԻՆ</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "10px" }}>
        <CardMedia
          component="img"
          alt="Viktor Hambardzumyan"
          height="140"
          image="https://yn.am/disc/05-02-16/86755f93c43809639a9ef71b47d83be0.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Հասարակական-քաղաքական գործունեություն
          </Typography>
          <Typography variant="body2" color="text.secondary">
          1940 թվականին Վ. Համբարձումյանը դարձել է Խորհրդային Միության կոմունիստական կուսակցության անդամ։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={()=>{navigate('lists')}}>ԻՄԱՆԱԼ ԱՎԵԼԻՆ</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "10px" }}>
        <CardMedia
          component="img"
          alt="Viktor Hambardzumyan"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/9/99/%D5%8E%D5%AB%D5%AF%D5%BF%D5%B8%D6%80_%D5%80%D5%A1%D5%B4%D5%A2%D5%A1%D6%80%D5%B1%D5%B8%D6%82%D5%B4%D5%B5%D5%A1%D5%B6_%282%29.JPG"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Անդամակցությունը գիտական կազմակերպություններին
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Համբարձումյանը աշխարհում 24 գիտությունների ակադեմիաների և 15 գիտական կազմակերպությունների անդամ էր։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={()=>{navigate('lists')}}>ԻՄԱՆԱԼ ԱՎԵԼԻՆ</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "10px" }}>
        <CardMedia
          component="img"
          alt="Viktor Hambardzumyan"
          height="140"
          image="https://yn.am/disc/05-02-16/86755f93c43809639a9ef71b47d83be0.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Պարգևներ և կոչումներ
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Վիկտոր Համբարձումյանի անվան Բյուրականի աստղադիտարան, աստղադիտարան Հայաստանի 
          Բյուրական գյուղում, Արագած սարի լանջին։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={()=>{navigate('lists')}}>ԻՄԱՆԱԼ ԱՎԵԼԻՆ</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "10px" }}>
        <CardMedia
          component="img"
          alt="astxaditaran"
          height="140"
          image="https://i.ytimg.com/vi/yCh3t4ae9Fw/sddefault.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Աստղադիտարան
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Վիկտոր Համբարձումյանի անվան Բյուրականի աստղադիտարան, աստղադիտարան Հայաստանի 
          Բյուրական գյուղում, Արագած սարի լանջին։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={()=>{navigate('lists')}}>ԻՄԱՆԱԼ ԱՎԵԼԻՆ</Button>
        </CardActions>
      </Card>
    </div>
  );
}
