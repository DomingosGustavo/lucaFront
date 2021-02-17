import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import arrowDown from '../assets/arrowDown.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    fontSize: "13px",
    width: "100px",
    lineHeight: "16px",

    fontWeight: "normal",
    fontStyle: "normal",
    marginLeft: "23px",
    marginTop: "17px",
    height: "36px",
    borderRadius: "10px",
    textAlign: "left",
    border: "3px solid #C6C7D4",
    boxSizing: "border-box",
    boxShadow: "0px 2px 0px #C6C7D4",
  },
  icon: {
    position: "absolute",
    marginLeft: 105,
    marginTop: -20
  },
  text: {
    flex: 6,
  },
  input:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  }
}));
export default function Input(props) {
  const { onClick, text } = props;
  const classes = useStyles();
  return (
    <div className={classes.input}>
      <input className={classes.root} placeholder={" " + text} ></input>
      <img src={arrowDown} className={classes.icon}/>
    </div>
  );
}
