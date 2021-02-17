import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "../components/button";
import Hidden from "@material-ui/core/Hidden";
import { useSnackbar } from "notistack";
import BasicInput from "../components/basicInput";
import "../styles/tabs.css";

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
    width: "100%",
  },
  buttonWhite: {
    background: "#ffffff",
  },
}));
export default function Question(props) {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [text, setText] = useState("");
  const onPublish = () => {
      enqueueSnackbar(`Publicación con título ${title} enviada!`, {variant: 'success'});
      history.goBack();
  };
  return (
    <Grid container direction="row" className={classes.root}>
      <Hidden smDown>
        <Grid item xs={3}></Grid>
      </Hidden>
      <Grid item>
        <Grid container direction="column">
          <Grid container direction="row">
            <Grid item xs={8}>
              <Typography className={classes.title}>
                Haz una pregunta
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.button}>
              <Button text="Cancelar" white onClick={() => history.goBack()} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <BasicInput
              label="Título de publicación"
              text="Escribe tu título aquí"
              onChange={setTitle}
            />
          </Grid>
          <Grid item xs={12}>
            <BasicInput
              label="Publicación"
              text="Escribe tu publicación aquí"
              onChange={setText}
              textArea
            />
          </Grid>
          <Grid container direction="row" xs={12}>
            <Grid item sm={8} xs={0}></Grid>
            <Grid item sm={4} xs={12} className={classes.button}>
              <Button text="Publicar" onClick={onPublish} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item xs={3}></Grid>
      </Hidden>
    </Grid>
  );
}
