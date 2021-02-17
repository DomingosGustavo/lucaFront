import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import arrowDown from "../assets/arrowDown.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "600",
    color: "white",
    background: "var(--blue)",
    fontStyle: "normal",
    marginLeft: "23px",
    marginTop: "17px",
    height: "36px",
    borderRadius: "10px",
    border: "3px solid #212B80",
    boxSizing: "border-box",
    boxShadow: "0px 2px 0px #212B80",
  },
  rootWhite: {
    fontSize: "14px",
    width: "177px",
    lineHeight: "16px",
    fontWeight: "600",
    color: "var(--blue)",
    background: "var(white))",
    fontStyle: "normal",
    marginLeft: "23px",
    marginTop: "17px",
    height: "36px",
    borderRadius: "10px",
    border: "3px solid #212B80",
    boxSizing: "border-box",
    boxShadow: "0px 2px 0px #212B80",
  },
  button: {
    textAlign: "center",
    marginTop: 5,
  },
}));
export default function Button(props) {
  const { onClick, text, white } = props;
  const classes = useStyles();
  return (
    <div className={white ? classes.rootWhite :classes.root} onClick={onClick}>
      <div className={classes.button}>{text}</div>
    </div>
  );
}
