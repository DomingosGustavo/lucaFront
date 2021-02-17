import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import QuestionCard from "../components/questionCard";
import "../styles/tabs.css";
import Button from "../components/button";
import Hidden from "@material-ui/core/Hidden";
import Fab from "@material-ui/core/Fab";
import pen from "../assets/pen.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

const data = [
  {
    name: "juan.c23",
    isFavorite: true,
    question: "¿Cuáles son los múltiplos del 7?",
    description:
      "La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...",
    course: "Matemáticas 6",
    commentNumber: 72,
  },
  {
    name: "juan.c23",
    isFavorite: true,
    question: "¿Cuáles son los múltiplos del 7?",
    description:
      "La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...",
    course: "Matemáticas 6",
    commentNumber: 72,
  },
  {
    name: "juan.c23",
    isFavorite: true,
    question: "¿Cuáles son los múltiplos del 7?",
    description:
      "La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...",
    course: "Matemáticas 6",
    commentNumber: 72,
  },
  {
    name: "juan.c23",
    isFavorite: true,
    question: "¿Cuáles son los múltiplos del 7?",
    description:
      "La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...",
    course: "Matemáticas 6",
    commentNumber: 72,
  },
];

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: 40,
    paddingBottom: 48,
    fontFamily: "Inter",
    "font-size": "24px",
    "font-style": "normal",
    "font-weight": 400,
    "line-height": "32px",
    "letter-spacing": "0em",
    "text-align": "left",
    color: "var(--gray1)",
  },
  button: {
    paddingTop: 20,
  },
}));
export default function Home(props) {
  const classes = useStyles();
  const { history } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClickNewQuestion = () => history.push("/question");

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Grid container direction="row">
          <Grid item sm={10} xs={6}>
            <Typography className={classes.title}>Comunidad Luca</Typography>
          </Grid>
          <Hidden smDown>
            <Grid
              item
              sm={2}
              xs={6}
              className={classes.button}
              onClick={onClickNewQuestion}
            >
              <Button text="Nueva Pergunta" />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid item>
        <AppBar position="static" color="transparent" elevation={0}>
          <Tabs
            value={value}
            color="transparent"
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Populares" />
            <Tab label="Nuevos" />
            <Tab label="Seguidos" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {data.map((x) => (
              <QuestionCard data={x} />
            ))}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {data.map((x) => (
              <QuestionCard data={x} />
            ))}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {data.map((x) => (
              <QuestionCard data={x} />
            ))}
          </TabPanel>
        </SwipeableViews>
      </Grid>
      <Hidden smUp>
        <Fab
          color={"primary"}
          style={{ position: "absolute", bottom: 70, right: 10 }}
          onClick={onClickNewQuestion}
        >
          <img src={pen} />
        </Fab>
      </Hidden>
    </Grid>
  );
}
