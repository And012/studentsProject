import { Routes, Route } from "react-router-dom";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useState}  from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./Victor.module.css";
import {
  ABOUT_SIENCE,
  BEEING_AUTHER,
  BIOGRAFY,
  COMUNIST_MEMBER,
  EDUCATION,
  LITTLE_PLANET,
  LONDON_COMPANY,
  MEMBERS,
  SIENCE_ACADEMY,
  SINCE,
  SPEACH,
  SPEACH_FIRST,
  SPEACH_SECOND,
  STAR_SYSTEM_FIRST,
  STAR_SYSTEM_SECOND,
  LIST_SEVEN_MAP,
  LIST_SIX_MAP,
  TEXT_BYURAKAN,
  BYURAKAN_TEXT_2,
  BYURAKAN_TEXT_3,
} from "./const.js";

export default function Victor_Glxavor() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Card_Function />} />
      </Routes>
    </>
  );
}

function Card_Function() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickClose1 = () => {
    setOpen1(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClickClose3 = () => {
    setOpen3(false);
  };
  const handleClickOpen4 = () => {
    setOpen4(true);
  };
  const handleClickClose4 = () => {
    setOpen4(false);
  };
  const handleClickOpen5 = () => {
    setOpen5(true);
  };
  const handleClickClose5 = () => {
    setOpen5(false);
  };
  const handleClickOpen6 = () => {
    setOpen6(true);
  };
  const handleClickClose6 = () => {
    setOpen6(false);
  };
  const handleClickOpen7 = () => {
    setOpen7(true);
  };
  const handleClickClose7 = () => {
    setOpen7(false);
  };
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
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={handleClickOpen}>
            ԻՄԱՆԱԼ ԱՎԵԼԻՆ
          </Button>
          <Dialog open={open} keepMounted onClose={handleClickClose}>
            <DialogTitle>{"Կենսագրություն"}</DialogTitle>
            <DialogContent>
              <Typography sx={{ color: "black" }}>
                {BIOGRAFY} <br />
                {EDUCATION} <br />
                {ABOUT_SIENCE} <br />
                {MEMBERS}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose}>ՓԱԿԵԼ</Button>
            </DialogActions>
          </Dialog>
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
          <Typography gutterBottom variant="h5" compnent="div">
            Գիտական գործունեության ուղղությունները
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Կիրառելով վիճակագրական մեխանիկայի ինքնատիպ եղանակներ՝ Համբարձումյանը
            կարևոր արդյունքներ է ստացել։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={handleClickOpen1}>
            ԻՄԱՆԱԼ ԱՎԵԼԻՆ
          </Button>
          <Dialog open={open1} keepMounted onClose={handleClickClose1}>
            <DialogTitle>
              {"Գիտական գործունեության ուղղությունները"}
            </DialogTitle>
            <DialogContent>
              <Typography sx={{ color: "black" }}>
                {LONDON_COMPANY} <br />
                {SPEACH} <br />
                {STAR_SYSTEM_FIRST} <br />
                {STAR_SYSTEM_SECOND}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose1}>ՓԱԿԵԼ</Button>
            </DialogActions>
          </Dialog>
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
            Համբարձումյանը գիտական աշխատանքը զուգակցել է աշխույժ մանկավարժական
            գործունեության հետ։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={handleClickOpen2}>
            ԻՄԱՆԱԼ ԱՎԵԼԻՆ
          </Button>
          <Dialog open={open2} keepMounted onClose={handleClickClose2}>
            <DialogTitle>{"Մանկավարժական գործունեություն"}</DialogTitle>
            <DialogContent>
              <Typography sx={{ color: "black" }}>{BEEING_AUTHER}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose2}>ՓԱԿԵԼ</Button>
            </DialogActions>
          </Dialog>
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
            Համբարձումյանը գիտության երևելի կազմակերպիչ էր Հայաստանում,
            Ռուսաստանում և միջազգային ասպարեզում։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={handleClickOpen3}>
            ԻՄԱՆԱԼ ԱՎԵԼԻՆ
          </Button>
          <Dialog open={open3} keepMounted onClose={handleClickClose3}>
            <DialogTitle>{"Գիտա-կազմակերպչական գործունեություն"}</DialogTitle>
            <DialogContent>
              <Typography sx={{ color: "black" }}>
                {SINCE}
                <div className={styles.xosq}>
                  {SPEACH_FIRST} <br />
                  {SPEACH_SECOND}
                </div>
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose3}>ՓԱԿԵԼ</Button>
            </DialogActions>
          </Dialog>
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
            1940 թվականին Վ. Համբարձումյանը դարձել է Խորհրդային Միության
            կոմունիստական կուսակցության անդամ։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={handleClickOpen4}>
            ԻՄԱՆԱԼ ԱՎԵԼԻՆ
          </Button>
          <Dialog open={open4} keepMounted onClose={handleClickClose4}>
            <DialogTitle>{"Հասարակական-քաղաքական գործունեություն"}</DialogTitle>
            <DialogContent>
              <Typography sx={{ color: "black" }}>{COMUNIST_MEMBER}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose4}>ՓԱԿԵԼ</Button>
            </DialogActions>
          </Dialog>
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
            Համբարձումյանը աշխարհում 24 գիտությունների ակադեմիաների և 15 գիտական
            կազմակերպությունների անդամ էր։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={handleClickOpen5}>
            ԻՄԱՆԱԼ ԱՎԵԼԻՆ
          </Button>
          <Dialog open={open5} keepMounted onClose={handleClickClose5}>
            <DialogTitle>
              {"Անդամակցությունը գիտական կազմակերպություններին"}
            </DialogTitle>
            <DialogContent>
              <Typography sx={{ color: "black" }}>
                {SIENCE_ACADEMY}

                <ul className={styles.list_ul_1}>
                  {LIST_SIX_MAP.map((el, index) => {
                    return (
                      <li className={styles.my_li} key={index}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose5}>ՓԱԿԵԼ</Button>
            </DialogActions>
          </Dialog>
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
            Վիկտոր Համբարձումյանի անվան Բյուրականի աստղադիտարան, աստղադիտարան
            Հայաստանի Բյուրական գյուղում, Արագած սարի լանջին։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={handleClickOpen6}>
            ԻՄԱՆԱԼ ԱՎԵԼԻՆ
          </Button>
          <Dialog open={open6} keepMounted onClose={handleClickClose6}>
            <DialogTitle>{"Պարգևներ և կոչումներ"}</DialogTitle>
            <DialogContent>
              <Typography sx={{ color: "black" }}>
                <ul className={styles.list_ul_2}>
                  {LIST_SEVEN_MAP.map((el, index) => {
                    return (
                      <li className={styles.my_li} key={index}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
                {LITTLE_PLANET}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose6}>ՓԱԿԵԼ</Button>
            </DialogActions>
          </Dialog>
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
            Վիկտոր Համբարձումյանի անվան Բյուրականի աստղադիտարան, աստղադիտարան
            Հայաստանի Բյուրական գյուղում, Արագած սարի լանջին։
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ՏԱՐԱԾԵԼ</Button>
          <Button size="small" onClick={handleClickOpen7}>
            ԻՄԱՆԱԼ ԱՎԵԼԻՆ
          </Button>
          <Dialog open={open7} keepMounted onClose={handleClickClose7}>
            <DialogTitle>{"Աստղադիտարան"}</DialogTitle>
            <DialogContent>
              <Typography sx={{ color: "black" }}>
                {TEXT_BYURAKAN} <br />
                {BYURAKAN_TEXT_2} <br />
                {BYURAKAN_TEXT_3}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose7}>ՓԱԿԵԼ</Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    </div>
  );
}
